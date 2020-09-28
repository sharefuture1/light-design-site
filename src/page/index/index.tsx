import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Body from './component/Body'

export default () => {
	return (
		<div className='w_100 border_box flex justify_center'>
			<Header />
			<Body />
			<Footer />
		</div>
	)
}
