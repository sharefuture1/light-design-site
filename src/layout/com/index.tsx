import React, { ReactChild, FunctionComponentElement } from 'react'
import Menu from './component/Menu'
import Header from './component/Header'
import Simulator from './component/Simulator'
import styles from './index.less'

export default ({ children }: { children: ReactChild | FunctionComponentElement<any> }) => {
	return (
		<div className={`${styles._local} w_100 border_box flex justify_center`}>
			<Menu />
			<div className='content_wrap w_100 border_box'>
				<div className='content w_100 border_box flex flex_column'>
					<Header />
					{children}
				</div>
			</div>
			<Simulator />
		</div>
	)
}
