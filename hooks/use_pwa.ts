import { useEffect } from 'react'
import { message } from 'antd'

const Index = () => {
	useEffect(() => {
		if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
			let refreshing = false

			navigator.serviceWorker.addEventListener('controllerchange', () => {
				if (refreshing) return

				refreshing = true

				message.warning('检测到文件更新，2s后自动刷新以更新页面', 2)

				const waitDelete = (): Promise<void> => {
					return new Promise(async resolve => {
						if ('caches' in window) {
							const keys = await caches.keys()

							for (const i of keys) {
								await caches.delete(i)
							}

							resolve()
						} else {
							resolve()
						}
					})
				}

				setTimeout(async () => {
                              await waitDelete()
                              
					window.location.reload(true)
				}, 1800)
			})
		}
	}, [])
}

export default Index
