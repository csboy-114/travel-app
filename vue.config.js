module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://www.imooc.com/api/mall-wepApp",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
    https: false, 
    open: true, 
  },
  lintOnSave: false,
  productionSourceMap: false, 
};
