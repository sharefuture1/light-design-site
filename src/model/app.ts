import modelExtend from 'dva-model-extend'
import commonModal from '@/util/model/common'

export interface IAppModelState {
	fold_menu: boolean
	fold_simulator: boolean
}

export default modelExtend(commonModal, {
	namespace: 'app',

	state: <IAppModelState>{
		fold_menu: false,
		fold_simulator: false
	},

	subscriptions: {},

	effects: {},
})
