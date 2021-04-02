import Document, { Html, Head, Main, NextScript } from 'next/document'

class Index extends Document {
	static async getInitialProps (ctx) {
		const initialProps = await Document.getInitialProps(ctx)

		return { ...initialProps }
	}

	render () {
		return (
			<Html>
				<Head />
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
