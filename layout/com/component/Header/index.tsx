import React from 'react'
import styles from './index.less'

export default () => {
	return (
		<div className={`${styles._local} w_100 border_box flex flex_column`}>
			<div className='name_wrap border_box'>
				<span className='name'>Button</span>
				<span className='name'>按钮</span>
			</div>
			<p className='version'>version: 1.0.0</p>
		</div>
	)
}
