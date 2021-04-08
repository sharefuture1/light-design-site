import { useEffect } from 'react'
import { message } from 'antd'

const Index = () => {
	useEffect(() => {
		if (
			typeof window !== 'undefined' &&
			'serviceWorker' in navigator &&
			window.workbox !== undefined
		) {
			let wb = window.workbox
			let timer

			// navigator.serviceWorker.addEventListener('install', () => {
			// 	window.workbox.messageSkipWaiting()
			// })

			// navigator.serviceWorker.addEventListener('controllerchange', () => {
			// 	message.warning('检测到文件更新，2s后自动刷新以更新页面', 2)

			// 	setTimeout(async () => {
			// 		window.location.reload()
			// 	}, 1800)
			// })
			// Ctrl+Shift+R
			// Cmd+Shift+R

			wb.addEventListener('waiting', () => {
				wb.messageSkipWaiting()
			})

			wb.addEventListener('controlling', () => {
				message.warning('检测到文件更新，2s后自动刷新以更新页面', 2)

				timer = setTimeout(() => {
					window.location.reload()
				}, 1800)
			})

			wb.register()

			return () => clearTimeout(timer)
		}
	}, [])
}

export default Index
