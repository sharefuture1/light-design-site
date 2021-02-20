import request from '@/utils/use_request'
import { IMenuItems } from '@/@types/global.interface'

export const Service_getMenuItems = (): Promise<Array<IMenuItems>> => {
	return request.get(`/coms/getMenuItems`)
}
