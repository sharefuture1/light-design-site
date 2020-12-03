import { AppProps } from 'next/app'
import Layout from '@/layout'
import Antd from '@/components/Antd'
import Dva from '@/components/Dva'
import SEO from '@/components/SEO'
import useProgress from '@/hooks/use_progress'
import '@/styles/global.less'

const Index = ({ Component, pageProps }: AppProps) => {
	useProgress()

	return (
		<Antd>
			<Dva>
				<Layout>
					<SEO />
					<Component {...pageProps} />
				</Layout>
			</Dva>
		</Antd>
	)
}

export default Index
