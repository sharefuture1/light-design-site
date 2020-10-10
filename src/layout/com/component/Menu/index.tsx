import React from 'react'
import { Link } from 'umi'
import { AppstoreOutlined } from '@ant-design/icons'
import Logo from '@/component/Logo'
import styles from './index.less'
import menu_items from '@/data/menu_items'

export default () => {
	return (
		<div
			className={`${styles._local} h_100vh border_box flex flex_column fixed top_0 left_0`}
		>
			<Link className='preview flex align_center' to='/com'>
				<AppstoreOutlined style={{ fontSize: '18px' }} />
				<span className='ml_10'>所有组件</span>
			</Link>
			<div className='menu_items flex flex_column'>
				{menu_items.map((item) => (
					<div className='menu_item flex flex_column' key={item.name}>
						<Link className='title cursor_point' to={`/com/${item.path}`}>
							{item.name}
						</Link>
						<div className='components flex flex_column'>
							{item.components.map((it) => (
								<Link
									className='component flex align_end relative'
									to={`/com/${item.path}/${it.path
										? it.path
										: it.name}`}
									key={it.name}
								>
									<span className='name'>{it.name}</span>
									<span className='description'>
										{it.description}
									</span>
								</Link>
							))}
						</div>
					</div>
				))}
			</div>
			<Link className='logo flex align_center none' to='/'>
				<Logo size={1.3} />
				<div className='logo_text flex flex_column'>
					<span className='text'>Light Design</span>
					<div className='flex justify_between'>
						<span className='slogan'>自</span>
						<span className='slogan'>然</span>
						<span className='slogan'>之</span>
						<span className='slogan'>美</span>
					</div>
				</div>
			</Link>
		</div>
	)
}
