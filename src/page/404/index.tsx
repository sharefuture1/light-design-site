import React from 'react'
import styles from './index.less'

export default () => (
	<div
		className={`${styles._local} w_100vw h_100vh flex flex_column justify_center align_center`}
	>
		<div className='flex flex_column align_end'>
			<span className='mark'>404</span>
			<span className='not_found'>页面未找到</span>
		</div>
	</div>
)
