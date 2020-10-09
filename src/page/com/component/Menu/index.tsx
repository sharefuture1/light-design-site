import React from 'react'
import styles from './index.less'
import menu_items from './menu_items'

export default () => {
	return (
		<div className={`${styles._local} h_100vh border_box flex flex_column fixed top_0 left_0`}>
			<div className='menu_items flex flex_column'>
				{menu_items.map((item) => (
					<div className='menu_item flex flex_column' key={item.name}>
						<span className='title'>{item.name}</span>
						<div className='components flex flex_column'>
							{item.components.map((it) => (
								<span className='component' key={it.name}>
									{it.name}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
