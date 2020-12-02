import { Fragment } from 'react'
import { useRouter } from 'next/router'
import All from '@/layout/all'
import menu_items from '@/data/menu_items'

const Index = () => {
	const { query: { group } } = useRouter()
	const index = menu_items.findIndex(item => item.path === group)

	return index >= 0 ? <All menu_items={[ menu_items[index] ]} /> : <Fragment />
}

export default Index
