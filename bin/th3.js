#! /usr/bin/env node

"use strict";

const program = require("commander");

const registerLogger = require("../lib/register-logger");
const checkHasInited = require("../lib/check-init");
const checkVersion = require("../lib/check-version");
const { resolveCwd } = require("../lib/utils");

main();

async function main() {
  if (process.argv[2] !== "lint" && process.argv[2] !== "bug") await beforeInit();
  // 注入  Command 参数
  program
    .version(require("../package").version)
    .usage("<command> [options]")
    .command("init", "创建一个基于th3的项目")
    .command("server", "运行开发服务")
    .command("build", "打包项目")
    .command("update", "更新框架以及命令行工具至最新版本")
    .command("lint", "校验 JS 代码 并修复一些JS错误")
    .command("bug", "debug 开发代码")
    .parse(process.argv);

  registerLogger("", process);
}

// 初始化前.进行版本检测  UI检测 .及NODE检测
async function beforeInit() {
  if (process.argv[2] !== "init") {
    checkHasInited();

    // 检测th3-ui UI库
    const packageJson = require(resolveCwd("package.json"));
    if (packageJson.dependencies && packageJson.dependencies["th3-ui"])
      await checkVersion("th3-ui")();
  }
  await checkVersion("th3-cli")();
}
