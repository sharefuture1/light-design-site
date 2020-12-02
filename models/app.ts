export interface IAppModelState {
	fold_menu: boolean
	fold_simulator: boolean
}

const Index = {
	namespace: 'app',

	state: <IAppModelState>{
		fold_menu: false,
		fold_simulator: false
	},

	subscriptions: {},

	effects: {}
}

export default Index
