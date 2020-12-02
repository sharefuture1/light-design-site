import React from 'react'
import NavLink from '@/components/NavLink'
import { IMenuItems } from '@/data/menu_items'
import styles from './index.less'

const Index = ({ menu_items }: { menu_items: Array<IMenuItems> }) => {
	return (
		<div className={`${styles._local} w_100 border_box flex flex_column`}>
			{menu_items.map((item) => (
				<div className='menu_item flex flex_column' key={item.name}>
					<Link
						className='title_wrap flex flex_column'
						to={`/com/${item.path}`}
					>
						<span className='title'>{item.name}</span>
						<span className='description'>{item.description}</span>
					</Link>
					<div className='components flex flex_wrap'>
						{item.components.map((it) => (
							<Link
								className='component flex flex_column justify_center'
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
	)
}

export default Index
