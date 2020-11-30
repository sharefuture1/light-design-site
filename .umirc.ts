import * as path from 'path'
import { defineConfig } from 'umi'

const isProd = process.env.NODE_ENV === 'production'
const ssr = false

const splitChunks = (config: any) => {
	config.merge({
		optimization: {
			minimize: true,
			splitChunks: {
				chunks: 'all',
				minSize: 30000,
				minChunks: 3,
				automaticNameDelimiter: '.',
				cacheGroups: {
					vendor: {
						name: 'vendors',
						test ({ resource }: any) {
							return /[\\/]node_modules[\\/]/.test(resource)
						},
						priority: 10
					}
				}
			}
		}
	})
}

export default Object.assign(
	defineConfig({
		title: 'Light Design',
		cssnano: {},
		singular: true,
		exportStatic: {},
		favicon: '/favicon.ico',
		dva: { immer: true, hmr: true },
		alias: { '@root': path.join(__dirname, './') },
		dynamicImport: { loading: '@/component/Landing' },
		nodeModulesTransform: { type: 'none', exclude: [] },
		locale: { baseNavigator: false, default: 'zh-CN', antd: true },
		targets: { chrome: 79, firefox: false, safari: false, edge: false, ios: false },
		theme: {
			'font-size-base': '15px',
			'primary-color': '#000000',
			'outline-width': '0px',
			'border-radius-base': '24px',
			'border-color-base': 'rgba(245, 245, 245, 0.72)',
			'border-color-split': 'rgba(245, 245, 245, 0.72)'
		},
		chainWebpack: config => {
			if (isProd) splitChunks(config)
		}
	}),
	isProd ? {} : { esbuild: {} },
	ssr ? { ssr: { devServerRender: !isProd, mode: 'stream' } } : {}
)
