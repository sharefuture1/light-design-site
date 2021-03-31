import { If, Then } from 'react-if'
import NavLink from '@/components/NavLink'
import { IMenuItems } from '@/@types/global.interface'
import styles from './index.less'

const Index = ({ menu_items }: { menu_items: Array<IMenuItems> }) => {
	return (
		<div className={`${styles._local} w_100 border_box flex flex_column`}>
			{menu_items.map(item => (
				<If condition={item.active} key={item.name}>
					<Then>
						<div className='menu_item flex flex_column'>
							<NavLink
								className='title_wrap flex flex_column'
								to={`/com/${item.path}`}
							>
								<span className='title'>{item.name}</span>
								<span className='description'>
									{item.description}
								</span>
							</NavLink>
							<div className='components flex flex_wrap'>
								{item.components.map((it, idx) => (
									<If condition={it.active} key={idx}>
										<Then>
											<NavLink
												className='component flex flex_column justify_center'
												to={`/com/${item.path}/${it.path
													? it.path
													: it.name}`}
											>
												<span className='name'>
													{it.name}
												</span>
												<span className='description'>
													{it.description}
												</span>
											</NavLink>
										</Then>
									</If>
								))}
							</div>
						</div>
					</Then>
				</If>
			))}
		</div>
	)
}

export default Index
