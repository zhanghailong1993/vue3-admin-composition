const { resolve } = require("path");
const path = require("path");
const WebpackBar = require("webpackbar");

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        path.resolve(__dirname, "src/styles/_variables.scss"),
        path.resolve(__dirname, "src/styles/_mixins.scss"),
      ],
    },
  },
  configureWebpack() {
    return {
      resolve: {
        alias: {
          "@": resolve("src"),
        },
      },
      plugins: [new WebpackBar()],
    };
  },
};
