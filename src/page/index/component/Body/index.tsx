import React from 'react'
import { Link } from 'umi'
import styles from './index.less'

const Index = () => {
	return (
		<div
			className={`${styles._local} w_100vw h_100vh border_box flex justify_center align_center`}
		>
			<div className='content_wrap flex flex_column justify_center align_center'>
				<span className='slogan'>贴近自然的UI组件库</span>
				<span className='description'>Light Design，自然的美</span>
				<Link
					className='btn_start border_box flex justify_center align_center transition_normal'
					to='/'
				>
					现在开始
				</Link>
			</div>
		</div>
	)
}

export default Index
