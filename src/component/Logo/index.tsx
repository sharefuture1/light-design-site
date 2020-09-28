import React from 'react'

import styles from './index.less'

export default () => {
	return (
		<div className={`flex flex_column cursor_point ${styles._local}`}>
			<div className='border_box flex'>
				<div className='block_1 block' />
				<div className='block_2 block' />
			</div>
			<div className='block_3 block' />
		</div>
	)
}
