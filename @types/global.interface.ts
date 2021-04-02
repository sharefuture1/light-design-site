import { PackageJson } from 'types-package-json'

export type TDispatch = (
	params: {
		type: string
		payload?: object
	}
) => void

export interface IMenuItems {
	name: string
	description: string
	path?: string
	active?: boolean
	components: Array<IMenuItems>
}

export interface IPackageJson extends PackageJson {
      component: string
	cname: string
}
