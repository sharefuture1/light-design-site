const withPlugins = require('next-compose-plugins')
const withAntdLess = require('next-antd-aza-less')
const { modifyVars, handleAntd } = require('./utils/build/use_antd')
const { handleMarkdown } = require('./utils/build/use_md')
const { handleOptimize } = require('./utils/build/use_optimize')

const config = {
	cssModules: true,
	typescript: {
		transpileOnly: true,
		ignoreDevErrors: true,
		ignoreBuildErrors: true
	},
	cssLoaderOptions: {
		importLoaders: 1,
		localIdentName: '[hash:base64:4]'
	},
	lessLoaderOptions: {
		javascriptEnabled: true,
		modifyVars: modifyVars
	},
	experimental: {
		workerThreads: true,
		optimizeFonts: true,
		optimizeImages: true,
		optimizeCss: true
	},
	webpack: (config, { isServer }) => {
		handleAntd(config, isServer)
		handleMarkdown(config)
		handleOptimize(config)

		return config
	}
}

module.exports = withPlugins([ withAntdLess ], config)
