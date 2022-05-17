---
title: 前端校招面试题
theme: default
tag: InformalEssay
time: 2020.12.6
---

## 前端校招面试题

### TCP 拥塞控制

### css 盒子模型

- W3C 的标准盒模型

  在标准的盒子模型中，width 指 content 部分的宽度

- IE 的盒模型

  在 IE 盒子模型中，width 表示 content+padding+border 这三个部分的宽度

- box-sizing 的使用

```
box-sizing: content-box 是W3C盒子模型
box-sizing: border-box 是IE盒子模型
```

### 固定宽高元素的水平垂直居中

- position:absolute、50%和 margin:-px
- position:fixed、0 和 margin:auto

```css
.container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

/* - position:absolute、0 和 margin:auto
- position:absolute、50%和 translate */

.container {
  position: relative;
}
.inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

- css3 flex

### 跨域，常用方案

浏览器从一个域名的网页去请求另一个域名的资源时，域名、端口、协议任一不同，都是跨域。

- 通过 jsonp 跨域（只支持 get、利用 script 无同源限制，以函数参数形式获取返回值）

  首先说一下 jsonp 的原理，例如我们平时写 html 的时候常常会使用
  `<script src="www.b.com/js/jquery.js"></script>`这种方式去取放在另外服务器上的静态资源，这个是不受同源策略所限制的，所以我们利用这一点可以解决跨域的问题。

  ```js
  // 在www.a.com域名写下如下代码，去请求www.b.com域名的数据
  var script = document.creatElement('script');
  script.type = 'text/javascript';
  script.src = 'http://www.b.com/getdata?callback=demo';
  function demo(res) {
    console.log(res);
  }
  ```

- nginx 代理跨域

```js
server{
    # 监听8080端口
    listen 8080;
    # 域名是localhost
    server_name localhost;
    #凡是localhost:8080/api这个样子的，都转发到真正的服务端地址http://www.b.com:8080
    location ^~ /api {
        proxy_pass http://www.b.com:8080;
    }
}
```

补充：进行带有身份凭证的 CORS 请求

    （1）、默认情况下的跨域请求都是不会把 cookie 发送给服务器的，在需要发送的情况下，如果是 xhr，那么需要设置 xhr.withCredentials=true,

    （2）、如果是采用 fetch 获取的话，那么需要在 request 里面设置 credentials:'include',

    （3）、但是如果服务器在预请求的时候没返回 Access-Control-Allow-Crenditials:true 的话，那么在实际请求的时候，cookie 是不会被发送给服务器端的，要特别注意对于简单的 get 请求，不会有预请求的过程，

### http 缓存，强缓存/协商缓存

HTTP Cache 是我们开发中接触最多的缓存，它分为强缓存和协商缓存。

- 强缓存：直接从本地副本比对读取，不去请求服务器，返回的状态码是 200。

  强缓存主要包括 expires 和 cache-control。

- 协商缓存：会去服务器比对，若没改变才直接读取本地缓存，返回的状态码是 304。

  协商缓存主要包括 last-modified 和 etag

- 当 Cache-Control 设置为 max-age=xx 并且同时设置 Expires 时，Cache-Control 的优先级更高
- 当 ETag 和 Last-Modified 同时存在时，服务器先会检查 ETag，然后再检查 Last-Modified，最终决定返回 304 还是 200

### 箭头函数和普通函数的区别

- 箭头函数是匿名函数，不能作为构造函数，不能使用 new
- 箭头函数不能绑定 arguments
- 箭头函数没有原型属性
- 箭头函数的 this 永远指向其上下文的 this，没有办改变其指向，
  普通函数的 this 指向调用它的对象
- 箭头函数不绑定 this，会捕获其所在的上下文的 this 值，作为自己的 this 值

### JS 如何终止 forEach 循环 break 报错，return 跳不出循环

- forEach 大概是没有办法中断了，我们可以采用其它的办法来实现循环

  终止 forEach 可以使用 try catch 内部抛出错误，catch 捕获错误。

```js
let arr = [1, 2, 3];
try {
  arr.forEach((item) => {
    if (item === 2) {
      throw '循环终止';
    }
    console.log(item);
  });
} catch (e) {
  console.log('e: ', e);
}
```

- Array.prototype.some

  当 return true 的时候，会终止遍历

- Array.prototype.every

  当 return false 的时候，会终止遍历

### for in 和 for of 的区别

- for in 遍历的是对象的下标并且会遍历原型链，
- for of 遍历对象的值

### null typeof 为什么是 Object

- js 初版，使用的是 32 位系统，为了性能考虑使用低位存储了变量的类型信息
- （二进制）000 开头代表是对象，然而 null 表示为全零，所以将它错误的判断为 object

### 判断这个对象是数组的方法

- Array.isArray()
- instanceof
- Object.prototype.toString().call()

### 怎样实现跨域 AJAX 请求发送 Cookie

- 第一步: 服务器必须在 Response Header 中设置:

  Access-Control-Allow-Credentials: true

- 第二步: 客户端发起请求时需要将

  xhr.withCredentials 设为: true;

### CommonJS 模块与 ES6 模块的区别

- 因为 CommonJS 的 require 语法是同步的，所以就导致了 CommonJS 模块规范只适合用在服务端，而 ES6 模块无论是在浏览器端还是服务端都是可以使用的，但是在服务端中，还需要遵循一些特殊的规则才能使用 ；
- CommonJS 模块输出的是一个值的拷贝，而 ES6 模块输出的是值的引用；
- CommonJS 模块是运行时加载，而 ES6 模块是编译时输出接口，使得对 JS 的模块进行静态分析成为了可能；
- 因为两个模块加载机制的不同，所以在对待循环加载的时候，它们会有不同的表现。CommonJS 遇到循环依赖的时候，只会输出已经执行的部分，后续的输出或者变化，是不会影响已经输出的变量。而 ES6 模块相反，使用 import 加载一个变量，变量不会被缓存，真正取值的时候就能取到最终的值；
- 关于模块顶层的 this 指向问题，在 CommonJS 顶层，this 指向当前模块；而在 ES6 模块中，this 指向 undefined；
- 关于两个模块互相引用的问题，在 ES6 模块当中，是支持加载 CommonJS 模块的。但是反过来，CommonJS 并不能 requireES6 模块，在 NodeJS 中，两种模块方案是分开处理的。

### 设置 0.5px 的边框线(将伪元素宽高设置为父元素的 200%，然后通过 scale 缩放 50%)

```
.element {
  position: relative;
  &::before {
    top: 0;
    left: 0;
    z-index: 1;
    content: '';
    width: 200%;
    height: 200%;
    display: block;
    position: absolute;
    pointer-events: none;
    transform-origin: 0 0;
    box-sizing: border-box;
    transform: scale(0.5, 0.5);
    border: 1px solid #ccc;
  }
}
```
