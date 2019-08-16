require("./lib/check-versions")();

const Koa = require("koa");
const app = new Koa();

const staticMiddleware = require("koa-static");
const proxyMiddleware = require("koa-proxies");
const historyFallback = require("koa2-history-api-fallback");

const { resolveCwd } = require("./lib/utils");

// 公共目录
const staticPath = resolveCwd("dist");
app.use(staticMiddleware(staticPath));
app.use(historyFallback());

const tofurc = require("../lib/get-config")();

// 获取项目配置
const th3Config = require("../lib/get-th3config")();
// 获取代理
if (th3Config && th3Config.isProxy) {
  const proxyTable = th3Config.proxy;
  Object.keys(proxyTable).forEach(path => {
    app.use(proxyMiddleware(path, proxyTable[path]));
  });
}
// ----

app.listen(3000);
require("opn")("http://localhost:3000");
console.log("正在监听 3000 端口");
