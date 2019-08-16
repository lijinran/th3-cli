const fs = require("fs");
const { resolveCwd } = require("./utils");

module.exports = () => {
  if (fs.existsSync(resolveCwd(".th3config/init"))) {
    try {
      return fs.readFileSync(resolveCwd(".th3config/init"));
    } catch (err) {
      console.error("获取 .th3config/init.js 出错");
      console.error(err);
    }
  } else if (fs.existsSync(resolveCwd(".th3config/init.js"))) {
    return require(resolveCwd(".th3config/init.js"));
  } else if (fs.existsSync(resolveCwd(".th3config/init.json"))) {
    return require(resolveCwd(".th3config/init.json"));
  } else {
    return;
  }
};
