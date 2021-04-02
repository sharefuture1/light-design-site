import store from 'store'
import { Model } from '@/@types/dva.interface'
import { IMenuItems, IPackageJson } from '@/@types/global.interface'
import { Service_getMenuItems } from '@/services/app'

export interface IAppModelState {
	fold_menu: boolean
	fold_simulator: boolean
	menu_items: Array<IMenuItems>
	package_json: IPackageJson
	anchors: Array<string>
}

const Index = <Model>{
	namespace: 'app',

	state: <IAppModelState>{
		fold_menu: false,
		fold_simulator: false,
		package_json: {},
            menu_items: [],
            anchors:[]
	},

	subscriptions: {
		setup ({ dispatch }) {
			dispatch({ type: 'getMenuItems' })

			const fold_menu = store.get('fold_menu')
			const fold_simulator = store.get('fold_simulator')

			dispatch({
				type: 'updateState',
				payload: {
					fold_menu: fold_menu ? fold_menu : false,
					fold_simulator: fold_simulator ? fold_simulator : false
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
