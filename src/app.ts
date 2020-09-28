import { RequestConfig } from 'umi'
import { message as _message } from 'antd'
import Config from './config'

export const request: RequestConfig = {
	prefix: Config.BASE_URL
}
