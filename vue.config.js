const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080,

    host: "192.168.0.245",
    open: true,
    hot: true,//自动保存
    proxy: {
      '/api/': {
        target: 'http://192.168.0.245:8000',
        changeOrigin: true

      }
    }
  },
})
