---
title: 常用的三种模块化规范
theme: default
tag: Javascript
time: 2020.11.4
---

## 常用的三种模块化规范

### ES6Moudle

- 使用 import/export 语法，在文件顶部导入需要的模块，特点是：静态化，在编译时候确定模块之间的以来关系，以及输入输出变量。
- ES6 中 export 和 import 一般的用法有两种 （别名使用 as 关键字）
  - 命名导出（Named exports）
  - 默认导出（Default exports）

ES6Moudle 在语言标准的层面上，实现了模块功能，而且实现得相当简单，未来大有可能完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案

```js
//module-a.js
export default {
  a: 1,
};
```

**import 命令具有提升效果，会提升到整个模块的头部，首先执行。**

```js
//module-b.js
const b = a + 2;
import { a } from './module-a';
```

### CommonJS

- commonJS 服务器端（nodeJS）的 js 模块规范,同步加载方式。因为 nodeJS 会被部署在服务端不存在 js 模块下载阻塞的问题，但是浏览器则是本地客户机存在下载 js 文件阻塞的问题。
- (1）模块定义

```js
module.exports.add = function () {
  ...
}
module.exports = function () {
  return ...
}

```

- （2）模块引用

```js
var add = require('./add.js');
var config = require('config.js');
var http = require('http');
```

### ADM

AMD 是 requireJS 倡导的一种模块化规范，**推崇依赖前置**；在 requireJS 中模块是通过 define 来进行定义的，如果模块之间相互依赖，需要先将依赖模块导入进来，待导入完毕之后，在通过回调函数的方式执行后面的代码，有效的解决了模块依赖的问题。

- (1)模块定义

```js
define({
  method1: function() {}
  method2: function() {}
});

//或者
define(function(){
  return {
    method1: function() {},
    method2: function() {},
  }
});
```

- (2)模块引用

```js
require(['a', 'b'], function (a, b) {
  a.method();
  b.method();
});
```

#### 当然还有什么 UMD、CMD 规范这里就不一样叙说了

## 面试常问

### 前端模块化和服务端模块化有什么区别？

服务端加载一个模块，直接就从硬盘或者内存中读取了，消耗时间可以忽略不计
浏览器需要从服务端下载这个文件，所以说如果用 CommonJS 的 require 方式加载模块，需要等代码模块下载完毕，并运行之后才能得到所需要的 API。

### 为什么 CommonJS 不适用于前端模块？

如果我们在某个代码模块里使用 CommonJS 的方法 require 了一个模块，而这个模块需要通过 http 请求从服务器去取，如果网速很慢，而 CommonJS 又是同步的，所以将阻塞后面代码的执行，从而阻塞浏览器渲染页面，使得页面出现假死状态。
因此后面 AMD 规范随着 RequireJS 的推广被提出，异步模块加载，不阻塞后面代码执行的模块引入方式，就是解决了前端模块异步模块加载的问题。

### CommonJS 和 AMD 的对比：

CommonJS 一般用于服务端，AMD 一般用于浏览器客户端
CommonJS 和 AMD 都是运行时加载
