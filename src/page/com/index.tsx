import React from 'react'
import menu_items from '@/data/menu_items'

const Index = () => {
	return (
		<div className='w_100 border_box flex flex_column'>
			{menu_items.map((item) => (
				<div className='menu_item flex flex_column'>
					<span className='title'>{item.name}</span>
					<span className='description'>{item.description}</span>
					<div className='components flex flex_wrap'>
						{item.components.map((it) => (
							<div className='component flex flex_column'>
								<span className='name'>{it.name}</span>
								<span className='description'>
									{it.description}
								</span>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	)
}

export default Index
