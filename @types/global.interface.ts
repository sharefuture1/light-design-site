export interface IMenuItems {
	name: string
	description: string
	path: string
	components: Array<{ name: string; path: string; description: string }>
}