const cwd = process.cwd();

const fs = require("fs-extra");
const inquirer = require("inquirer");
const ora = require("ora");
const pacote = require("pacote");

const { resolveCwd } = require("../lib/utils");
const { log } = require("../lib/log");
const registerLogger = require("../lib/register-logger");

// 初始化
init();
// 注册日志
registerLogger("init", process);

async function init() {
  const { templateType } = await selectTemplate();

  const { confirm } = await inquirer.prompt({
    type: "confirm",
    name: "confirm",
    message:
      "Are you sure you want to create the project in the current folder? \n 确定要将项目创建在当前文件夹吗？"
  });

  if (!confirm) return;

  const spinner = ora("正在下载模板文件...");
  let name, registry;
  const dist = "./";
  registry = "http://registry.npm.taobao.org";
  spinner.start();
  switch (templateType) {
    case "PC":
      name = "pitaya";
      break;
    case "electron":
      name = "macadamia";
      break;
    case "vue-th3-pc":
      name = "vue-th3-pc"; // VUE的PC版模板
      break;
    case "vue-th3-m":
      name = "vue-th3-m"; // VUE移动版的模板
      break;
    case "vue-th3-pages":
      name = "vue-th3-pages"; // VUE移动版的模板
      break;
    default:
      break;
  }
  await pacote.extract(name, dist, { registry });
  spinner.stop();
  if(name=='vue-th3-pages'){
    afterDownloadPages()
  }else{
    afterDownload();
  }

}

/**
 * 选择模板类型
 *
 * @returns
 */
async function selectTemplate() {
  return await inquirer
    .prompt({
      name: "templateType",
      message: "请选择新建的模板类型",
      type: "list",
      default: 0,
      choices: [
        {
          name: 'vue-th3-pc',
          value: 'vue-th3-pc'
        },
        {
          name: 'vue-th3-m',
          value: 'vue-th3-m'
        },
        {
          name: 'vue-th3-pages',
          value: 'vue-th3-pages'
        }
      ]
    })
    .catch(err => {
      console.error("选择模板类型出错");
      console.error(err);
    });
}

/**
 * 下载之后做的事情
 * @param {String}   项目目录
 */
function afterDownload() {
  fs.removeSync(resolveCwd(".npmignore"));

  //--- 增加gitignore
  fs.readFile(resolveCwd("gitignore"), (err, data) => {
    if (err) throw err;
    fs.writeFile(resolveCwd(".gitignore"), data, err => {
      if (err) throw err;
      // console.log('The file has been saved!');
      log("The file has been saved!");
    });
  });
  //-----
  log();
  log("已完成项目的初始化:", "green");
  log();
  log(`    在当前目录中新建了项目`, "white");
  log();
  log("接下来你需要：", "white");
  log();
  log("    cnpm install", "white");
  log("    git init", "white");
  log();
  log("然后你可以：", "white");
  log();
  log("    - th3 server          运行开发项目", "white");
  log("    - th3 build           打包发布项目", "white");
  // log('    - th3 update          更新框架以及命令行工具至最新版本', 'white');
  log();
}

function afterDownloadPages() {
  fs.removeSync(resolveCwd(".npmignore"));
  fs.readFile(resolveCwd("gitignore"), (err, data) => {
    if (err) throw err;
    fs.writeFile(resolveCwd(".gitignore"), data, err => {
      if (err) throw err;
      log("The file has been saved!");
    });
  });
  log();
  log("已完成项目的初始化:", "green");
  log();
  log(`在当前目录中新建了项目`, "white");
  log();
  log("接下来你需要：", "white");
  log();
  log("     npm install", "yellow");
  log();
  log("然后你可以：", "white");
  log();
  log("     npm run serve         运行开发项目", "yellow");
  log("     npm run build           打包发布项目", "yellow");
  log();
}