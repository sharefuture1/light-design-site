import { memo } from 'react'
import { connect } from 'react-redux'
import { If, Then } from 'react-if'
import { AppstoreOutlined } from '@ant-design/icons'
import NavLink from '@/components/NavLink'
import { IAppModelState } from '@/models/app'
import useSubscriptions from '@/hooks/use_subscriptions'
import { IMenuItems } from '@/@types/global.interface'
import styles from './index.less'

interface IProps {
	fold: boolean
	component: string
	menu_items: Array<IMenuItems>
}

const Index = (props: IProps) => {
	const { fold, component, menu_items } = props
	const app_menu_items = useSubscriptions(menu_items, [])

	return (
		<div
			className={`
                        ${styles._local} 
                        ${fold ? styles.fold : ''} 
                        h_100vh border_box flex flex_column fixed top_0 left_0 transition_normal
                  `}
		>
			<NavLink className='preview flex align_center' to='/com'>
				<AppstoreOutlined style={{ fontSize: '18px' }} />
				<span className='ml_10'>所有组件</span>
			</NavLink>
			<div className='menu_items flex flex_column'>
				{app_menu_items.map(item => (
					<If condition={item.active} key={item.name}>
						<Then>
							<div className='menu_item flex flex_column'>
								<NavLink
									className='title cursor_point'
									to={`/com/${item.path}`}
								>
									<span>{item.name}</span>
								</NavLink>
								<div className='components flex flex_column'>
									{item.components.map(it => (
										<If condition={it.active} key={it.name}>
											<Then>
												<NavLink
													className='component flex align_end relative'
													to={`/com/${item.path}/${it.path
														? it.path
														: it.name}`}
												>
													<span
														className={`
                                                                                    ${component ===
														it.name
															? 'active'
															: ''} 
                                                                                    name
                                                                              `}
													>
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
		</div>
	)
}

const getData = ({ app: { menu_items } }: { app: IAppModelState }) => ({
	menu_items
})

export default memo(connect(getData)(Index))
