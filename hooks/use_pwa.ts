import { useEffect } from 'react'
import { message } from 'antd'

const Index = () => {
	useEffect(() => {
		if (
			typeof window !== 'undefined' &&
			'serviceWorker' in navigator &&
			window.workbox !== undefined
		) {
			const wb = window.workbox

			wb.addEventListener('waiting', () => {
				wb.addEventListener('controlling', () => {
					message.warning('检测到文件更新，3s后自动刷新以更新页面')

					setTimeout(() => {
						window.location.reload()
					}, 3000)
				})

				wb.messageSkipWaiting()
			})
		}
	}, [])
}

export default Index
