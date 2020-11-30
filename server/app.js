const { extname } = require('path')
const Koa = require('koa')
const compress = require('koa-compress')
const static = require('koa-static')
const { parseCookie, parseNavLang } = require('./helper')

const isDev = process.env.NODE_ENV === 'development'
const app = new Koa()

app.use(
	compress({
		threshold: 2048,
		gzip: { flush: require('zlib').constants.Z_SYNC_FLUSH },
		deflate: { flush: require('zlib').constants.Z_SYNC_FLUSH },
		br: false
	})
)

let render
app.use(async (ctx, next) => {
	global._cookies = parseCookie(ctx)
	global._navigatorLang = parseNavLang(ctx)

	const ext = extname(ctx.request.path)

	if (!ext) {
		if (!render) render = require('../dist/umi.server')

		ctx.type = 'text/html'
		ctx.status = 200

		const { html, error } = await render({ path: ctx.request.url })

		if (error) ctx.throw(500, error)
		if (isDev) delete require.cache[require.resolve('../dist/umi.server')]

		ctx.body = html
	} else {
		await next()
	}
})

app.use(static('dist', {maxage: 1 * 86400 * 1000}))

app.listen(8000)

console.log('app runing on => http://localhost:8000')

module.exports = app.callback()
