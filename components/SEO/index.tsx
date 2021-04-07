import Head from 'next/head'

const Index = () => {
	const logo = '/images/logo_light_design_black.png'

	return (
		<Head>
			<title>Light Design</title>
			<meta charSet='utf-8' />
			<meta name='renderer' content='webkit' />
			<meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
			/>

			<meta name='baidu-site-verification' content='code-0E3w1AJ7h6' />

			<meta property='twitter:site' content='@light_design' />
			<meta name='twitter:image' content={logo} />

			<meta property='og:title' content='Light Design' />
			<meta property='og:site_name' content='Light Design' />
			<meta property='og:type' content='website' />
			<meta property='og:url' content='https://lightd.matrixages.com' />
			<meta property='og:image' content={logo} />
			<meta
				property='og:description'
				content='Light Design - 遵循自然之道的次世代 UI 设计语言和用户体验解决方案'
			/>

			<meta name='description' content='Light Design - 遵循自然之道的次世代 UI 设计语言和用户体验解决方案' />
			<meta
				name='keywords'
				content='lightd,light design,Light Design,组件,组件库,小程序组件,小程序,微信,微信小程序,小程序开发,小程序入门,小程序入门教程,wxapp,weapp,miniprogram,js,javascript,es5,es6,component,vue,vuejs,angular,react,reactjs,next,nextjs,css,html,编程,编程入门,代码,写代码'
			/>
			<meta content={logo} />
		</Head>
	)
}

export default Index
