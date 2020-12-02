import React from 'react'
import NavLink from '@/components/NavLink'
import Logo from '@/components/Logo'
import MatrixAge from '@/components/MatrixAge'
import styles from './index.less'

const Index = () => {
	const nav_items: Array<{ name: string; path: string }> = [
		{
			name: '组件',
			path: '/com'
		},
		{
			name: '文档',
			path: '/'
		},
		{
			name: '白皮书',
			path: '/'
		},
		{
			name: 'Github',
			path: '/'
		}
	]

	return (
		<div
			className={`${styles._local} w_100 border_box flex justify_center align_center fixed top_0 left_0`}
		>
			<header className='header w_100 border_box flex justify_between align_center relative'>
				<NavLink
					className='left absolute h_100 border_box flex align_center left_0'
					to='/'
				>
					<Logo />
				</NavLink>
				<div className='nav_items w_100 h_100 border_box flex justify_center align_center'>
					{nav_items.map((item) => (
						<NavLink className='nav_item transition_normal border_box flex justify_center align_center' to={item.path} key={item.name}>
							{item.name}
						</NavLink>
					))}
				</div>
				<a
					className='right absolute h_100 border_box flex align_center right_0'
					href='https://github.com/MatrixAge'
					target='_blank'
					rel='noopener noreferrer'
				>
					<MatrixAge />
				</a>
			</header>
		</div>
	)
}

export default Index
