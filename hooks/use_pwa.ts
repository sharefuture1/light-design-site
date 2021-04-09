import { useEffect } from 'react'
import { message } from 'antd'

const Index = () => {
	useEffect(() => {
		if (
			typeof window !== 'undefined' &&
			'serviceWorker' in navigator 
		) {
                  let timer: NodeJS.Timeout

			navigator.serviceWorker.addEventListener('controllerchange', () => {
                        message.warning('检测到文件更新，2s后将刷新页面', 2)
                        
                        setTimeout(() => {
                              window.location.reload()
                        }, 1800);
			})

			return () => clearTimeout(timer)
		}
	}, [])
}

export default Index
