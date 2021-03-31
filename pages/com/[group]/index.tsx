import { memo, Fragment } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { IAppModelState } from '@/models/app'
import useSubscriptions from '@/hooks/use_subscriptions'
import { IMenuItems } from '@/@types/global.interface'
import All from '@/layout/all'

interface IProps {
	menu_items: Array<IMenuItems>
}

const Index = ({ menu_items }: IProps) => {
	const { query: { group } } = useRouter()
	const app_menu_items = useSubscriptions(menu_items, [])

	const index = app_menu_items.findIndex(item => item.path === group)

	return index >= 0 ? <All menu_items={[ app_menu_items[index] ]} /> : <Fragment />
}

const getData = ({ app: { menu_items } }: { app: IAppModelState }) => ({
	menu_items
})

export default memo(connect(getData)(Index))
