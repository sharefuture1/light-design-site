import { memo } from 'react'
import { NextPage } from 'next'
import { If, Then } from 'react-if'
import NavLink from '@/components/NavLink'
import { connect } from 'react-redux'
import { IAppModelState } from '@/models/app'
import useSubscriptions from '@/hooks/use_subscriptions'
import { IMenuItems, TDispatch } from '@/@types/global.interface'
import styles from '@/layout/all/index.less'

interface IProps {
	dispatch: TDispatch
	menu_items: Array<IMenuItems>
}

const Index: NextPage<IProps> = ({ menu_items }) => {
	const app_menu_items = useSubscriptions(menu_items, [])

	return (
		<div className={`${styles._local} w_100 border_box flex flex_column`}>
			{app_menu_items.map(item => (
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
								{item.components.map(it => (
									<If condition={it.active} key={it.name}>
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

const getData = ({ app: { menu_items } }: { app: IAppModelState }) => ({
	menu_items
})

export default memo(connect(getData)(Index))
