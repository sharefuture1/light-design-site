import { useEffect } from 'react'
import { message } from 'antd'

const Index = () => {
	useEffect(() => {
		if (
			typeof window !== 'undefined' &&
			'serviceWorker' in navigator 
		) {
			let timer:NodeJS.Timeout

			navigator.serviceWorker.addEventListener('install', () => {
				window.workbox.messageSkipWaiting()
			})

			navigator.serviceWorker.addEventListener('controllerchange', () => {
				message.warning('检测到文件更新，Ctrl+Shift+R | Cmd+Shift+R 刷新以更新页面', 0)
			})

			return () => clearTimeout(timer)
		}
	}, [])
}

export default Index
