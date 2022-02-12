const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://qcu332.api.cloudendpoint.cn/',
            changeOrigin: true,
        }),
    )
}
