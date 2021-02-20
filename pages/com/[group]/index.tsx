import { memo, Fragment } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { IAppModelState } from '@/models/app'
import { IMenuItems } from '@/@types/global.interface'
import All from '@/layout/all'

interface IProps {
	menu_items: Array<IMenuItems>
}

const Index = ({ menu_items }: IProps) => {
	const { query: { group } } = useRouter()
	const index = menu_items.findIndex(item => item.path === group)

	return index >= 0 ? <All menu_items={[ menu_items[index] ]} /> : <Fragment />
}

const getData = ({ app: { menu_items } }: { app: IAppModelState }) => ({
	menu_items
})

export default memo(connect(getData)(Index))
