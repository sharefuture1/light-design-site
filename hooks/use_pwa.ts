import { useEffect } from 'react'
import { message } from 'antd'

const Index = () => {
	useEffect(() => {
            if (typeof window !== 'undefined' && 'serviceWorker' in navigator && window.workbox !== undefined) {
			let refreshing = false

                  navigator.serviceWorker.addEventListener('install', () => {
                        window.workbox.skipWaiting()
                  })

			navigator.serviceWorker.addEventListener('controllerchange', () => {
				if (refreshing) return

				refreshing = true

				message.warning('检测到文件更新，2s后自动刷新以更新页面', 2)

				setTimeout(() => {
					window.location.reload()
				}, 1800)
			})
		}
	}, [])
}

export default Index
