import React from 'react'
import { history, IRouteComponentProps } from 'umi'
import Com from './com'
import All from './all'
import menu_items from '@/data/menu_items'
import apis from '@/data/apis'

const Index = ({ children, location: { pathname } }: IRouteComponentProps) => {
      const pathnames = pathname.split('/')

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
				history.push('/404')
			}
		}

		return React.Children.map(children, (child) => {
			return <Com>{React.cloneElement(child, { api: apis[pathnames[3]] })}</Com>
		})
	}

	return children
}

export default Index
