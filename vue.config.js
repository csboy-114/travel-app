module.exports = {
  publicPath:process.env.NODE_ENV==='production'?'/travel-webapp/':'/',
  devServer: {
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_SERVICE_URL,
        changeOrigin: true,
        pathRewrite: {
          [ '^' + process.env.VUE_APP_BASE_API]: ''
        },
      },
    },
    https: false,
    open: true,
  },
  lintOnSave: false,
  productionSourceMap: false,
  chainWebpack:config=>{
      config.set('externals',{
        vue:'Vue',
        'vue-router':'VueRouter',
        axios:'axios',
        vuex:'Vuex'
      })
  }
};
