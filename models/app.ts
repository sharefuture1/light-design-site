import store from 'store'
import { Model } from '@/@types/dva.interface'
import { IMenuItems, IPackageJson } from '@/@types/global.interface'
import { Service_getMenuItems } from '@/services/app'

export interface IAppModelState {
	fold_menu: boolean
	fold_simulator: boolean
	fold_anchors: boolean
	menu_items: Array<IMenuItems>
	package_json: IPackageJson
	anchors: Array<{
		name: string
		active: boolean
		top: number
	}>
}

const Index = <Model>{
	namespace: 'app',

	state: <IAppModelState>{
		fold_menu: false,
		fold_simulator: false,
		fold_anchors: true,
		package_json: {},
		menu_items: [],
		anchors: []
	},

	subscriptions: {
		setup ({ dispatch }) {
			dispatch({ type: 'getMenuItems' })

			const fold_menu = store.get('fold_menu')
			const fold_simulator = store.get('fold_simulator')
			const fold_anchors = store.get('fold_anchors')

			dispatch({
				type: 'updateState',
				payload: {
					fold_menu: fold_menu ? fold_menu : false,
					fold_simulator: fold_simulator ? fold_simulator : false,
					fold_anchors: fold_anchors ? fold_anchors : false
				}
			})
		}
	},

	effects: {
		*getMenuItems ({}, { call, put }) {
			const menu_items = yield call(Service_getMenuItems)

			yield put({ type: 'updateState', payload: { menu_items } })
		}
	}
}

export default Index
