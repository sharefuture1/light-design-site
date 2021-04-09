import Document, { Html, Head, Main, NextScript } from 'next/document'

const APP_NAME = 'Light Design'

class Index extends Document {
	static async getInitialProps (ctx) {
		return await Document.getInitialProps(ctx)
	}

	render () {
		return (
			<Html>
				<Head>
					<meta name='application-name' content={APP_NAME} />
					<meta name='apple-mobile-web-app-capable' content='yes' />
					<meta
						name='apple-mobile-web-app-status-bar-style'
						content='default'
					/>
					<meta name='apple-mobile-web-app-title' content={APP_NAME} />
					<meta name='format-detection' content='telephone=no' />
					<meta name='mobile-web-app-capable' content='yes' />
					<meta name='theme-color' content='black' />
					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='/icons/apple-touch-icon.png'
					/>
					<link rel='manifest' href='/manifest.json' />
				</Head>
				<style id='holderStyle' type='text/css'>{`
                              *, *::before, *::after {
                                    transition: none !important;
                              }
                        `}</style>
				<body>
					<Main />
					<NextScript />
				</body>
				<script src='/init.js' />
			</Html>
		)
	}
}

export default Index
