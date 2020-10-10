import React from 'react'
import { IRouteComponentProps } from 'umi'
import Com from './com'

const Index = ({ children, location: { pathname } }: IRouteComponentProps) => {
	if (pathname.split('/')[1] === 'com') return <Com>{children}</Com>

	return children
}

export default Index
