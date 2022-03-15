const { defineConfig } = require("@vue/cli-service");
const hardPlugin = require("hard-source-webpack-plugin");
const { resolve } = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭组件命名不规范报错
  lintOnSave: false,
  publicPath: "./",
  configureWebpack: {
    plugins: [
      new hardPlugin({
        cacheDirectory: resolve(__dirname, "cache"),
      }),
    ],
    resolve: {
      alias: {
        "@c": resolve(__dirname, "src/components"),
        "@a": resolve(__dirname, "src/assets"),
        "@b": resolve(__dirname, "src/blocks"),
        "@u": resolve(__dirname, "src/use"),
        "@r": resolve(__dirname, "src/router"),
        "@v": resolve(__dirname, "src/views"),
        "@p": resolve(__dirname, "src/plugins"),
        "@vp": resolve(__dirname, "src/view-provider"),
      },
    },
  },
});
