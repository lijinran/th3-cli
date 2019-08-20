## Install

    cnpm install th3-cli -g

> 因部分库 需要翻墙安装

## 主要功能

> 主要用于团队构建前端项目 , 方便统一项目管理 , 以及代码规范 , 目标主要功能 :

* 支持 VUE 单文件模式
* 支持 ES6
* 采用 webpack 打包
* 支持大部分的 VUE 项目编译

## 介绍

> 现在来简单介绍下项目的构成，它主要由这几部分内容构成：

    项目搭建
    开发环境
    项目打包
    内容更新
    代码校验

> 分别对应着五个命令：

    th3 init
    th3 server
    th3 build
    th3 update(未完成)
    th3 lint(未完成)

> 现在来介绍下这些命令的用法。

## 用法

```
    // init 项目初始化下载
    th3 init
    // server
    th3 server   开发
```

#### 指定端口

```
    th3 server [-p|--port <port>]
    // build  打包
    th3 build
```

### 不压缩

```
    th3 build [-C|--no-compress]
```

### 压缩后删除 dist

```
    th3 build [-d|--delete]
```

## 更新模板 ( 未完成 )

```
    th3 update [-a|--all]
    //lint
    th3 lint
```

### 自动修复 ( 未完成 )

```
    th3 lint [-f|--fix]
```

### 模板配置文件说明

> .th3furc 配置选项说明

```
// 移动端VUE 项目的模板
https://www.npmjs.com/package/vue-th3-m
```
// PC端 VUE 项目的模板
https://www.npmjs.com/package/vue-th3-pc
```

| 参数       | 说明               |
| ---------- | ------------------ |
| href       | hostname           |
| port       | 端口               |
| proxy      | 代理配置           |
| rules      | Eslint 的规则配置  |
| webpack    | 用来覆盖基础配置   |
| updateList | 配置需要更新的文件 |
| _meta      | 元信息             |
