import React, { memo, useState, useEffect, Fragment } from 'react'
import {
	connect,
	Redirect,
	IRouteComponentProps,
	IAppModelState,
	Dispatch
} from 'umi'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '@/component/CodeBlock'
import { Switch, Case, If, Then, Else } from 'react-if'
import Com from './com'
import All from './all'
import menu_items from '@/data/menu_items'
import styles from './index.less'

interface IProps extends IAppModelState, IRouteComponentProps {
	dispatch: Dispatch
}

const Index = (props: IProps) => {
	const { dispatch, children, location: { pathname }, fold_menu, fold_simulator } = props
	const [ state_md, setStatemd ] = useState('')
	const pathnames = pathname.split('/')

	useEffect(
		() => {
			if (pathnames[1] !== 'com') return
			if (pathnames.length !== 4) return

			import(`@/data/doc/${pathnames[2]}/${pathnames[3]}.md`)
				.then(({ default: md }: any) => setStatemd(md))
				.catch((e) => console.log(e))
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
		const index = menu_items.findIndex((item) => item.path === pathnames[2])

		return (
			<Com {...props_com}>
				<Switch>
					<Case condition={pathnames.length === 2}>{children}</Case>
					<Case condition={pathnames.length === 3}>
						<If condition={index !== -1}>
							<Then>
								<All menu_items={[ menu_items[index] ]} />
							</Then>
							<Else>
								<Redirect to='/404' />
							</Else>
						</If>
					</Case>
					<Case condition={pathnames.length === 4}>
						{React.Children.map(children, (child) => {
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

export default memo(
	connect(({ app: { fold_menu, fold_simulator } }: { app: IAppModelState }) => ({
		fold_menu,
		fold_simulator
	}))(Index)
)
