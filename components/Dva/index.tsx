import { Provider } from 'react-redux'
import createApp from '@/utils/use_dva'
import models from '@/utils/register_model'

const app = createApp({ models })
const store = app.getStore()

const Index = ({ children }: { children: React.ReactNode }) => (
	<Provider store={store}>{children}</Provider>
)

export default Index
