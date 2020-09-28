import { request } from 'umi'
import API from '@/api'

export default {
	refresh: () => {
		return request(API.API_refresh)
	}
}
