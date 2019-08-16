const fs = require("fs");
const { resolveCwd } = require("./utils");

module.exports = () => {
  if (fs.existsSync(resolveCwd(".th3config/config"))) {
    try {
      return fs.readFileSync(resolveCwd(".th3config/config"));
    } catch (err) {
      console.error("获取 .th3config/config.js 配置文件 出错");
      console.error(err);
    }
  } else if (fs.existsSync(resolveCwd(".th3config/config.js"))) {
    return require(resolveCwd(".th3config/config.js"));
  } else if (fs.existsSync(resolveCwd(".th3config/config.json"))) {
    return require(resolveCwd(".th3config/config.json"));
  } else {
    return;
  }
};
