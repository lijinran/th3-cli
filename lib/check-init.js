const fs = require("fs");
const cwd = process.cwd();
const path = require("path");
const { log } = require("./log");

/**
 * 检查是否已经初始化：
 * 1.npm
 * 2.git
 */

module.exports = () => {
  let packageJson;
  try {
    packageJson = require(path.posix.join(cwd, "package.json"));
  } catch (err) {
    if (err.code === "MODULE_NOT_FOUND") {
      log("Please init package.json!\nPlease init package.json!\nPlease init package.json!", "red");
      log("Sorry, important things should be mentioned three times...");
      log("请先运行npm init 或是创建 package.json");
      process.exit(1);
    } else {
      throw err;
    }
  }

  // 检测 .git
  if (!fs.existsSync(path.posix.join(cwd, ".git"))) {
    log("Please init git!\nPlease init git!\nPlease init git!", "red");
    log("Sorry, important things should be mentioned three times...");
    log("请先执行 git init");
    process.exit(1);
  }
};
