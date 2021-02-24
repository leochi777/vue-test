module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
  outputDir: "dist",
  lintOnSave: true,
  runtimeCompiler: false,
  productionSourceMap: false,
  devServer: {
    open: true,
    port: 8081,
    https: false,
    hotOnly: false,
    proxy: {
      "/api": {
        target: "http://localhost:8005/workout",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "/api" //萬用字元
        },
        logLevel: "debug",
      },
    },
    disableHostCheck: true,
  },
};
