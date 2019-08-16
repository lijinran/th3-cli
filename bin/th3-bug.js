const program = require("commander");
const cwd = process.cwd();

const fs = require("fs-extra");

const { resolveCwd } = require("../lib/utils");
const { log } = require("../lib/log");
const registerLogger = require("../lib/register-logger");
const tofurc = require("../lib/get-config")();
program
	.option("-C, --no-compress", "不压缩")
	.option("-d, --delete", "压缩后删除 dist")
	.parse(process.argv);

// const config = require(resolveCwd("./config.js"));

bug();

registerLogger("bug", process);

function bug(params) {
	//   console.log(cwd);
	//   console.log(tofurc);
	//   // console.log(program);
	//   console.log(program.compress);
	//   console.log(program.delete);
	// console.log(config);
	console.log(112221)
	// console.log(cwd);
}
