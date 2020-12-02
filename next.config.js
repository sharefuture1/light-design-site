const withPlugins = require('next-compose-plugins')
const withCss = require('@zeit/next-css')
const withAntdLess = require('next-antd-aza-less')
const { modifyVars, handleAntd } = require('./utils/build/use_antd')
const { handleMarkdown } = require('./utils/build/use_md')
const { handleOptimize } = require('./utils/build/use_optimize')

const config = {
	cssModules: true,
	cssLoaderOptions: {
		importLoaders: 1,
		localIdentName: '[hash:base64:4]'
	},
	lessLoaderOptions: {
		javascriptEnabled: true,
		modifyVars: modifyVars
	},
      webpack: (config, {isServer}) => {
		handleAntd(config, isServer)
		handleMarkdown(config)
		handleOptimize(config)

		return config
	}
}

module.exports = withPlugins([ withCss, withAntdLess ], config)
