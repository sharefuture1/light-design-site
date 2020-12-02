const withPlugins = require('next-compose-plugins')
const withCss = require('@zeit/next-css')
const withAntdLess = require('next-antd-aza-less')
const { modifyVars, handleAntd } = require('./utils/use_antd')
const { handleMarkdown } = require('./utils/use_md')

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
	webpack: (config, { isServer }) => {
		handleMarkdown(config)
		handleAntd(config, isServer)

		return config
	}
}

module.exports = withPlugins([ withCss, withAntdLess ], config)
