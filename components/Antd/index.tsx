import zhCN from 'antd/lib/locale/zh_CN'
import { ConfigProvider } from 'antd'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

const Index = ({ children }: { children: React.ReactNode }) => {
	return <ConfigProvider locale={zhCN}>{children}</ConfigProvider>
}

export default Index
