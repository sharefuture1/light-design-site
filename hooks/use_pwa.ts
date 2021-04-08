import { useEffect } from 'react'
import { message } from 'antd'

const Index = () => {
	useEffect(() => {
		if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
			const wb = window.workbox

			// navigator.serviceWorker.addEventListener('install', () => {
			// 	window.workbox.messageSkipWaiting()
			// })

			// navigator.serviceWorker.addEventListener('controllerchange', () => {
			// 	message.warning('检测到文件更新，2s后自动刷新以更新页面', 2)

			// 	setTimeout(async () => {
			// 		window.location.reload()
			// 	}, 1800)
			// })

			wb.addEventListener('waiting', () => {
				wb.messageSkipWaiting()
			})

			wb.addEventListener('controlling', () => {
				message.warning('检测到文件更新，2s后自动刷新以更新页面', 2)

				setTimeout(() => {
					window.location.reload()
				}, 1800)
			})

			wb.register()
		}
	}, [])
}

export default Index
