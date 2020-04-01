const config = {
    proxyTable: {
        '/api': {
            target: 'http://192.168.0.106.3439',
            changeOrigin: true,
            pathRewrite: {
                '^/api':''
            }
        }
    }
}