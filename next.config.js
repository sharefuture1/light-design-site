const withPlugins = require('next-compose-plugins')
const withAntdLess = require('next-antd-aza-less')
const withPWA = require('next-pwa')
const { modifyVars, handleAntd } = require('./config/build/use_antd')
const { handleMarkdown } = require('./config/build/use_md')
const { handleOptimize } = require('./config/build/use_optimize')

const config = {
	cssModules: true,
	typescript: {
		transpileOnly: true,
		ignoreDevErrors: true,
		ignoreBuildErrors: true
	},
	cssLoaderOptions: {
		importLoaders: 1,
		localIdentName: '[hash:base64:3]'
	},
	lessLoaderOptions: {
		javascriptEnabled: true,
		modifyVars: modifyVars
	},
	pwa: {
		disable: process.env.NODE_ENV === 'development',
		workboxOptions: { skipWaiting: true },
		dest: 'public'
	},
	webpack: (config, { isServer }) => {
		handleAntd(config, isServer)
		handleMarkdown(config)
		handleOptimize(config)

		return config
	}
}

module.exports = withPlugins([ withAntdLess, withPWA ], config)
