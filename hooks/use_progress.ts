import { useEffect } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'

const Index = () => {
	const router = useRouter()

	useEffect(() => {
		const startProgress = () => NProgress.start()
		const stopProgress = () => NProgress.done()

		router.events.on('routeChangeStart', startProgress)
		router.events.on('routeChangeError', stopProgress)
		router.events.on('routeChangeComplete', stopProgress)

		return () => {
			router.events.off('routeChangeStart', stopProgress)
			router.events.off('routeChangeError', stopProgress)
			router.events.off('routeChangeComplete', stopProgress)
		}
	}, [])
}

export default Index
