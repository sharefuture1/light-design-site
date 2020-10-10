import React, { ReactChild } from 'react'
import Menu from './component/Menu'
import Simulator from './component/Simulator'
import styles from './index.less'

export default ({ children }: { children: ReactChild }) => {
	return (
		<div className={`${styles._local} w_100 border_box flex justify_center`}>
			<Menu />
                  <div className='content_wrap w_100 border_box'>
                        <div className="content w_100 border_box">{children}</div>
                  </div>
			<Simulator />
		</div>
	)
}
