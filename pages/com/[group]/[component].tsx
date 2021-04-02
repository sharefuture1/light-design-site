import { memo, useEffect } from 'react'
import { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import { connect } from 'react-redux'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import CodeBlock from '@/components/CodeBlock'
import Text from '@/components/mdx/Text'
import Title from '@/components/mdx/Title'
import Description from '@/components/mdx/Description'
import request from '@/utils/use_request'
import { PackageJson } from 'types-package-json'
import { TDispatch } from '@/@types/global.interface'
import styles from './index.less'

interface IProps {
	dispatch: TDispatch
	component: string
	source: string
	package_json: PackageJson
}

const components = {
	code: CodeBlock,
	Text,
	Title,
	Description
}

const Index: NextPage<IProps> = props => {
	const { dispatch, component, source, package_json } = props

	useEffect(
		() => {
			const h3 = Array.from(document.getElementsByTagName('h3'))
			const anchors = h3.reduce((total, item: HTMLHeadingElement) => {
				total.push(item.innerText)

				return total
                  }, [])

			dispatch({
				type: 'app/updateState',
				payload: { package_json, anchors }
			})
		},
		[ component ]
	)

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

export default memo(connect()(Index))
