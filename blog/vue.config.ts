const { defineConfig } = require("@vue/cli-service");
const hardPlugin = require("hard-source-webpack-plugin");
const { resolve } = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
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
        "@u": resolve(__dirname, "src/use"),
        "@r": resolve(__dirname, "src/router"),
        "@v": resolve(__dirname, "src/views"),
        "@p": resolve(__dirname, "src/plugins"),
        "@vp": resolve(__dirname, "src/view-provider"),
      },
    },
  },
});
