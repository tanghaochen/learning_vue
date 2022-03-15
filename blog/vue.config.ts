const { defineConfig } = require("@vue/cli-service");
const hardPlugin = require("hard-source-webpack-plugin");
const { resolve } = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
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
        "@b": resolve(__dirname, "src/blocks"),
        "@r": resolve(__dirname, "src/router"),
        "@v": resolve(__dirname, "src/views"),
        "@p": resolve(__dirname, "src/plugins"),
      },
      extensions: [".vue"],
    },
  },
});
