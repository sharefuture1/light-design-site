import { memo } from 'react'
import NavLink from '@/components/NavLink'
import { AppstoreOutlined } from '@ant-design/icons'
import styles from './index.less'
import menu_items from '@/data/menu_items'

interface IProps {
	fold: boolean
}

const Index = (props: IProps) => {
	const { fold } = props

	return (
		<div
			className={`
                        ${styles._local} 
                        ${fold ? styles.fold : ''} 
                        h_100vh border_box flex flex_column fixed top_0 left_0
                  `}
		>
			<NavLink className='preview flex align_center' to='/com'>
				<AppstoreOutlined style={{ fontSize: '18px' }} />
				<span className='ml_10'>所有组件</span>
			</NavLink>
			<div className='menu_items flex flex_column'>
				{menu_items.map(item => (
					<div className='menu_item flex flex_column' key={item.name}>
						<NavLink
							className='title cursor_point'
							to={`/com/${item.path}`}
						>
							<span>{item.name}</span>
						</NavLink>
						<div className='components flex flex_column'>
							{item.components.map(it => (
								<NavLink
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
								</NavLink>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default memo(Index)
