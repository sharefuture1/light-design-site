import { memo, useEffect } from 'react'
import { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import { connect } from 'react-redux'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import clone from 'lodash.clonedeep'
import CodeBlock from '@/components/CodeBlock'
import Text from '@/components/mdx/Text'
import Title from '@/components/mdx/Title'
import Description from '@/components/mdx/Description'
import request from '@/utils/use_request'
import { PackageJson } from 'types-package-json'
import { TDispatch } from '@/@types/global.interface'
import { IAppModelState } from '@/models/app'
import styles from './index.less'

interface IProps {
	dispatch: TDispatch
	component: string
	source: string
	package_json: PackageJson
	fold_anchors: IAppModelState['fold_anchors']
}

const components = {
	code: CodeBlock,
	Text,
	Title,
	Description
}

const Index: NextPage<IProps> = props => {
	const { dispatch, component, source, package_json, fold_anchors } = props

	useEffect(
		() => {
			dispatch({
				type: 'app/updateState',
				payload: { package_json }
			})

			if (fold_anchors) return

			const timer = setTimeout(() => {
				const h3 = Array.from(document.getElementsByClassName('anchor'))
				const anchors = h3.reduce((total, item: HTMLHeadingElement) => {
					total.push({
						name: item.innerText,
						active: false,
						top: item.offsetTop
					})

					return total
				}, [])

				dispatch({
					type: 'app/updateState',
					payload: { anchors }
				})

				window.addEventListener('scroll', () => handleScroll(anchors))
			}, 300)

			return () => {
				clearTimeout(timer)

				window.removeEventListener('scroll', () => handleScroll())
			}
		},
		[ component, fold_anchors ]
	)

	const handleScroll = (anchors?: IAppModelState['anchors']) => {
		const _anchors = clone(anchors)
		const scrollTop =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop

		_anchors.map(item => {
			if (scrollTop >= item.top) {
				item.active = true
			} else {
				item.active = false
			}
		})

		dispatch({
			type: 'app/updateState',
			payload: { anchors: _anchors }
		})
	}

	return (
		<div className={styles.markdown}>
			<Head>
				<title>Light Design - {component}</title>
				<meta name='description' content={`Light Design - ${component}组件`} />
			</Head>
			{hydrate(source, { components })}
		</div>
	)
}

export const getServerSideProps = async ({ query: { component } }: NextPageContext) => {
	const readme = await request.get(`/coms/getReadme/${component}`)
	const package_json = await request.get(`/coms/getPackageJson/${component}`)
	const source = await renderToString(readme, { components })

	package_json.component = component

	return { props: { component, source, package_json } }
}

const getData = ({ app: { fold_anchors } }: { app: IAppModelState }) => ({
	fold_anchors
})

export default memo(connect(getData)(Index))
