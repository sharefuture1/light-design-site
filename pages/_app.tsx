import Head from 'next/head'
import { AppProps } from 'next/app'
import Layout from '@/layout'
import Antd from '@/components/Antd'
import Dva from '@/components/Dva'
import useProgress from '@/hooks/use_progress'
import './_app.less'

const Index = ({ Component, pageProps }: AppProps) => {
	useProgress()

	return (
		<Antd>
			<Dva>
				<Layout>
					<Head>
						<title>Light Design</title>
					</Head>
					<Component {...pageProps} />
				</Layout>
			</Dva>
		</Antd>
	)
}

export default Index
