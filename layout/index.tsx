import React, { memo, useState, useEffect, Fragment } from 'react'
import { Switch, Case, If, Then, Else } from 'react-if'
import ReactMarkdown from 'react-markdown'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import CodeBlock from '@/components/CodeBlock'
import menu_items from '@/data/menu_items'
import Com from './com'
import All from './all'
import styles from './index.less'

const Index = (props: any) => {
	const { dispatch, children, fold_menu, fold_simulator } = props
	const [ state_md, setStatemd ] = useState('')
	const { pathname } = useRouter()
	const pathnames = pathname.split('/')

	useEffect(
		() => {
			if (pathnames[1] !== 'com') return
			if (pathnames.length !== 4) return

			import(`@/data/doc/${pathnames[2]}/${pathnames[3]}.md`)
				.then(({ default: md }: any) => setStatemd(md))
				.catch(e => console.log(e))
		},
		[ pathnames ]
	)

	const Markdown = () => {
		return (
			<If condition={state_md !== ''}>
				<Then>
					<ReactMarkdown
						className={styles.markdown}
						source={state_md}
						renderers={{ code: CodeBlock }}
						escapeHtml={false}
					/>
				</Then>
				<Else>
					<Fragment />
				</Else>
			</If>
		)
	}

	const props_com = {
		fold_menu,
		fold_simulator,
		changeMenuFoldStatus () {
			dispatch({
				type: 'app/updateState',
				payload: { fold_menu: !fold_menu }
			})
		},
		changeSimulatorFoldStatus () {
			dispatch({
				type: 'app/updateState',
				payload: { fold_simulator: !fold_simulator }
			})
		}
	}

	if (pathnames[1] === 'com') {
		const index = menu_items.findIndex(item => item.path === pathnames[2])

		return (
			<Com {...props_com}>
				<Switch>
					<Case condition={pathnames.length === 2}>{children}</Case>
					<Case condition={pathnames.length === 3}>
						<If condition={index !== -1}>
							<Then>
								<All menu_items={[ menu_items[index] ]} />
							</Then>
						</If>
					</Case>
					<Case condition={pathnames.length === 4}>
						{React.Children.map(children, child => {
							return React.cloneElement(
								child,
								pathnames.length === 4 ? { Markdown } : {}
							)
						})}
					</Case>
				</Switch>
			</Com>
		)
	}

	return children
}

const getData = ({ app: { fold_menu, fold_simulator } }: { app: any }) => ({
	fold_menu,
	fold_simulator
})

export default memo(connect(getData)(Index))
