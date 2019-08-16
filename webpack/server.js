require("./lib/check-versions")();

const proc = require("child_process");
const ora = require("ora");
const Koa = require("koa");
const app = new Koa();

const merge = require("webpack-merge");
const staticMiddleware = require("koa-static");
const webpackMiddleware = require("koa-webpack");
const proxy = require("koa-proxies");
const historyFallback = require("koa2-history-api-fallback");

const { resolveCwd, isPlainObject } = require("./lib/utils");

// 获取模板配置
const tofurc = require("../lib/get-config")();

// 获取项目配置
const th3Config = require("../lib/get-th3config")();

module.exports = (port, peace) => {
  let webpackConfig = require("./webpack.dev");
  // 支持 webpackConfig 在 .th3furc.js 里进行配置
  if (tofurc && tofurc.webpack && isPlainObject(tofurc.webpack)) {
    webpackConfig = merge(webpackConfig, tofurc.webpack);
  }
  if (peace) {
    webpackConfig.module.rules.shift();
  }

  const config = require("./config").dev;
  const webpack = require("webpack");
  const compiler = webpack(webpackConfig);

  const staticPath = resolveCwd(config.assetsPublicPath);
  app.use(staticMiddleware(staticPath));
  app.use(historyFallback());
  const webpackMiddlewareInstance = webpackMiddleware({
    compiler,
    hot: { log: false },
    dev: {
      quiet: true,
      publicPath: webpackConfig.output.publicPath
    }
  });
  app.use(webpackMiddlewareInstance);

  // th3 - config 代理
  if (th3Config && th3Config.isProxy) {
    const proxyTable = th3Config.proxy;
    Object.keys(proxyTable).forEach(path => {
      app.use(proxy(path, proxyTable[path]));
    });
  }
  //   ---

  const spinner = new ora("等待 webpack 打包完成...");
  spinner.start();

  port = port || (th3Config && th3Config.port) || 8080;
  const host = (th3Config && th3Config.href) || "localhost";
  const url = `http://${host}:${port}`;

  app.listen(port);

  webpackMiddlewareInstance.dev.waitUntilValid(() => {
    spinner.stop();

    if (tofurc._meta.type === "electron") {
      const child = proc.spawn(process.platform === "win32" ? "npm.cmd" : "npm", ["run", "dev"], {
        stdio: "inherit"
      });
      child.on("close", function(code) {
        process.exit(code);
      });
    } else {
      require("opn")(url);
    }
  });
};
