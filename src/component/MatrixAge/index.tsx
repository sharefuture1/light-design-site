import React from 'react'
import styles from './index.less'

export default () => {
	return (
		<div className={`border_box flex justify_between transition_normal cursor_point ${styles._local}`}>
			<div className='block' />
			<div className='block' />
			<div className='block' />
		</div>
	)
}
