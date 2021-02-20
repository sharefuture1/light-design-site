import { memo } from 'react'
import { NextPage } from 'next'
import { If, Then } from 'react-if'
import NavLink from '@/components/NavLink'
import { connect } from 'react-redux'
import { IAppModelState } from '@/models/app'
import { IMenuItems, TDispatch } from '@/@types/global.interface'
import styles from '@/layout/all/index.less'

interface IProps {
	dispatch: TDispatch
	menu_items: Array<IMenuItems>
}

const Index: NextPage<IProps> = ({ menu_items }) => {
	return (
		<div className={`${styles._local} w_100 border_box flex flex_column`}>
			{menu_items.map(item => (
				<If condition={item.active}>
					<Then>
						<div className='menu_item flex flex_column' key={item.name}>
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
									<If condition={it.active}>
										<Then>
											<NavLink
												className='component flex flex_column justify_center'
												to={`/com/${item.path}/${it.path
													? it.path
													: it.name}`}
												key={it.name}
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
