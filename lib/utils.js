const path = require('path')
const cwd = process.cwd()

exports.resolveCwd = (...p) => {
	return path.posix.join(cwd, ...p)
}

// const fs = require('fs')

// console.log(fs.existsSync(path.posix.join('.th3furc')));

// console.log(__dirname);

// const fs = require('fs-extra')
// /**
//  * 
//  * 复制模板文件
//  * @param {any} params 
//  */
// async function copyTemp(params) {

// 	const ndir = path.posix.join(cwd, '/tmp/mynewfile');
// 	fs.ensureDir(ndir, function(err) {
// 		console.log(err) // => null 
// 		//dir has now been created, including the directory it is to be placed in 
// 	});

// 	fs.copy(path.posix.join(cwd, '/templates/vapp'), ndir, function(err) {
// 		if (err) return console.error(err)
// 		console.log("success!")
// 	});
// }

// copyTemp()
