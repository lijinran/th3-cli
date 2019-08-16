// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    es6: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: "standard",
  // required to lint *.vue files
  plugins: ["html"],
  // add your custom rules here
  rules: {
    //官方文档 http://eslint.org/docs/rules/
    /**
     *  "off" 或 0 - 关闭规则
     *  "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
     *  "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
     */

    // "quotes": [0, "single"],                  //建议使用单引号
    // "no-inner-declarations": [0, "both"],     //不建议在{}代码块内部声明变量或函数
    "no-extra-boolean-cast": 1, //多余的感叹号转布尔型
    "no-extra-semi": 1, //多余的分号
    "no-extra-parens": 0, //多余的括号
    "no-empty": 1, //空代码块
    "no-use-before-define": [0, "nofunc"], //使用前未定义
    complexity: [1, 10], //圈复杂度大于10 警告

    //常见错误
    "comma-dangle": [1, "never"], //定义数组或对象最后多余的逗号
    "no-debugger": 1, //debugger 调试代码未删除
    "no-console": 0, //console 未删除
    "no-constant-condition": 2, //常量作为条件
    "no-dupe-args": 2, //参数重复
    "no-dupe-keys": 2, //对象属性重复
    "no-duplicate-case": 2, //case重复
    "no-empty-character-class": 2, //正则无法匹配任何值
    "no-invalid-regexp": 2, //无效的正则
    "no-func-assign": 2, //函数被赋值
    "valid-typeof": 1, //无效的类型判断
    "no-unreachable": 2, //不可能执行到的代码
    "no-unexpected-multiline": 2, //行尾缺少分号可能导致一些意外情况
    "no-sparse-arrays": 1, //数组中多出逗号
    "no-shadow-restricted-names": 2, //关键词与命名冲突
    "no-undef": 1, //变量未定义
    "no-unused-vars": 1, //变量定义后未使用
    "no-cond-assign": 2, //条件语句中禁止赋值操作
    "no-native-reassign": 2, //禁止覆盖原生对象
    "no-mixed-spaces-and-tabs": 0,

    //代码风格优化
    "no-irregular-whitespace": 0,
    "no-else-return": 0, //在else代码块中return，else是多余的
    "no-multi-spaces": 0, //不允许多个空格
    "key-spacing": [
      0,
      {
        beforeColon: false,
        afterColon: true
      }
    ], //object直接量建议写法 : 后一个空格前面不留空格
    "block-scoped-var": 1, //变量应在外部上下文中声明，不应在{}代码块中
    "consistent-return": 1, //函数返回值可能是不同类型
    "accessor-pairs": 1, //object getter/setter方法需要成对出现
    "dot-location": [1, "property"], //换行调用对象方法  点操作符应写在行首
    "no-lone-blocks": 1, //多余的{}嵌套
    "no-labels": 1, //无用的标记
    "no-extend-native": 1, //禁止扩展原生对象
    "no-floating-decimal": 1, //浮点型需要写全 禁止.1 或 2.写法
    "no-loop-func": 1, //禁止在循环体中定义函数
    "no-new-func": 1, //禁止new Function(...) 写法
    "no-self-compare": 1, //不允与自己比较作为条件
    "no-sequences": 1, //禁止可能导致结果不明确的逗号操作符
    "no-throw-literal": 1, //禁止抛出一个直接量 应是Error对象
    "no-return-assign": [1, "always"], //不允return时有赋值操作
    "no-redeclare": [
      1,
      {
        builtinGlobals: true
      }
    ], //不允许重复声明
    "no-unused-expressions": [
      0,
      {
        allowShortCircuit: true,
        allowTernary: true
      }
    ], //不执行的表达式
    "no-useless-call": 1, //无意义的函数call或apply
    "no-useless-concat": 1, //无意义的string concat
    "no-void": 1, //禁用void
    "no-with": 1, //禁用with
    "space-infix-ops": 0, //操作符前后空格
    "valid-jsdoc": [
      0,
      {
        requireParamDescription: true,
        requireReturnDescription: true
      }
    ], //jsdoc
    "no-warning-comments": [
      1,
      {
        terms: ["todo", "fixme", "any other term"],
        location: "anywhere"
      }
    ], //标记未写注释
    curly: 0, //if、else、while、for代码块用{}包围
    // allow paren-less arrow functions
    "arrow-parens": 0,
    semi: 0, //省略语句结束的分号,
    "space-before-function-paren": 0, // function 关键字后面的小括号前加空格。
    // allow async-await
    "generator-star-spacing": 0,
    "eol-last": ["off", "never"], // 文件末尾留一空行不用
    indent: ["off", "tab"], //检测行缩进的
    "dot-notation": ["error", { allowKeywords: false }], //不允许关键字出现在变量中
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0
  }
};
