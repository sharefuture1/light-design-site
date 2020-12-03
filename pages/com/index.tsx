
import { NextPage } from 'next'
import NavLink from '@/components/NavLink'
import _menu_items from '@/data/menu_items'
import request from '@/utils/use_request'
import {IMenuItems} from '@/@types/global.interface'
import styles from '@/layout/all/index.less'

interface IProps {
	menu_items: Array<IMenuItems>
}

const Index :NextPage<IProps> = ({menu_items}) => {
	return (
		<div className={`${styles._local} w_100 border_box flex flex_column`}>
			{_menu_items.map(item => (
				<div className='menu_item flex flex_column' key={item.name}>
					<NavLink
						className='title_wrap flex flex_column'
						to={`/com/${item.path}`}
					>
						<span className='title'>{item.name}</span>
						<span className='description'>{item.description}</span>
					</NavLink>
					<div className='components flex flex_wrap'>
						{item.components.map(it => (
							<NavLink
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
							</NavLink>
						))}
					</div>
				</div>
			))}
		</div>
	)
}

export const getServerSideProps = async () => {
	const menu_items = await request.get(`/coms/getMenuItems`)

	return { props: { menu_items } }
}

export default Index
