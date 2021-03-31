import { Model } from '@/@types/dva.interface'
import { IMenuItems, IPackageJson } from '@/@types/global.interface'
import { Service_getMenuItems } from '@/services/app'

export interface IAppModelState {
	fold_menu: boolean
	fold_simulator: boolean
	menu_items: Array<IMenuItems>
	package_json: IPackageJson
}

const Index = <Model>{
	namespace: 'app',

	state: <IAppModelState>{
		fold_menu: false,
		fold_simulator: false,
		package_json: {},
		menu_items: []
	},

	subscriptions: {
		setup ({ dispatch }) {
			const timer = setInterval(() => {
				try {
					if (!process.browser) return

					dispatch({ type: 'getMenuItems' })

					clearInterval(timer)
				} catch (_) {}
			}, 10)
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
