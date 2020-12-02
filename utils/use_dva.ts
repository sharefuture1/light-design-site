import { create } from 'dva-core'
import loading from 'dva-loading'
import immer from 'dva-immer'

const Index = (options: any) => {
	const app = create(options)

	options.models.forEach((model: any) => app.model(model))

	app.use(loading({}))
	app.use(immer())
	app.start()
	app.getStore = () => app._store
	app.dispatch = app._store.dispatch

	return app
}

export default Index
