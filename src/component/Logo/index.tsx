import React from 'react'

import styles from './index.less'

export default ({ size = 1, bg = false }: { size?: number; bg?: boolean }) => {
	return (
		<div
			className={`flex flex_column cursor_point ${styles._local} ${bg?styles.bg:''}`}
			style={{ transform: `scale(${size})` }}
		>
			<div className='border_box flex'>
				<div className='block_1 block' />
				<div className='block_2 block' />
			</div>
			<div className='block_3 block' />
		</div>
	)
}
