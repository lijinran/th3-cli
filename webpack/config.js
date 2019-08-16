const { resolveCwd } = require("./lib/utils");
const config = require(resolveCwd(".th3config/config"));

module.exports = {
  dev: {
    env: { NODE_ENV: '"development"' },
    port: config.devPort,
    autoOpenBrowser: true,
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    proxyTable: config.devProxy
  },
  build: {
    env: { NODE_ENV: '"production"' },
    index: resolveCwd("./dist/index.html"),
    assetsRoot: resolveCwd("./dist"),
    assetsSubDirectory: "static",
    assetsPublicPath: "",
    productionSourceMap: config.productionSourceMap
  }
};
