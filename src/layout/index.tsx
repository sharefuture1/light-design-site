import React, { useState, useEffect, Fragment } from 'react'
import { Redirect, IRouteComponentProps } from 'umi'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '@/component/CodeBlock'
import Com from './com'
import All from './all'
import menu_items from '@/data/menu_items'
import styles from './index.less'

const Index = ({ children, location: { pathname } }: IRouteComponentProps) => {
	const [ state_md, setStatemd ] = useState('')
	const pathnames = pathname.split('/')

	useEffect(() => {
		if (pathnames.length !== 4) return

		import(`@/data/api/${pathnames[2]}/${pathnames[3]}.md`)
			.then(({ default: md }: any) => setStatemd(md))
			.catch((e) => console.log(e))
	}, [])

	const Markdown = () => {
		return state_md ? (
			<ReactMarkdown
                        className={styles.markdown}
                        source={state_md}
                        renderers={{ code: CodeBlock }}
                        escapeHtml={false}
			/>
		) : (
			<Fragment />
		)
	}

	if (pathnames[1] === 'com') {
		if (pathnames.length === 3) {
			const index = menu_items.findIndex((item) => item.path === pathnames[2])

			if (index !== -1) {
				return (
					<Com>
						<All menu_items={[ menu_items[index] ]} />
					</Com>
				)
			} else {
				return <Redirect to='/404' />
			}
		}

		if (pathnames.length === 2 || pathnames.length === 4) {
			return React.Children.map(children, (child) => {
				return (
					<Com>
						{React.cloneElement(
							child,
							pathnames.length === 4 ? { Markdown } : {}
						)}
					</Com>
				)
			})
		}
	}

	return children
}

export default Index
