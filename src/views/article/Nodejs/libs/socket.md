---
title: socket.io初体验
theme: default
tag: Nodejs
time: 2021.3.31
---

## socket.io 初体验

### 什么是 socket.io

Socket.IO 是一个封装了 Websocket、基于 Node 的 JavaScript 框架，包含 client 的 JavaScript 和 server 的 Node。其屏蔽了所有底层细节，让顶层调用非常简单。另外，Socket.IO 还有一个非常重要的好处。其不仅支持 WebSocket，还支持许多种轮询机制以及其他实时通信方式，并封装了通用的接口。这些方式包含 Adobe Flash Socket、Ajax 长轮询、Ajax multipart streaming 、持久 Iframe、JSONP 轮询等。换句话说，当 Socket.IO 检测到当前环境不支持 WebSocket 时，能够自动地选择最佳的方式来实现网络的实时通信。

### 客户端（vue+vue-socket.io）

#### 安装

```shell
npm install vue-socket.io --save
```

#### 实现

- 引入 vue-socket.io

```js
import VueSocketIO from 'vue-socket.io';
Vue.use(
  new VueSocketIO({
    debug: true,
    connection: '你的地址',
    vuex: {},
  })
);
```

- 监听服务端自定义事件

```js
 sockets: {
    // 服务器事件名字
    msg: function (data) {
      console.log(data);
    }, // 举个例子 服务器传来 msg消息
    online: function (data) {
      console.log(data);
    },
  },
```

注意：sockets 与 methods 同级 不在 methods 内

#### 可能遇到的问题链接请求跨域问题

- 在 vue.config.js 配置一下代理

```js
 proxy: {
    '/socket.io': {
     target: 'http://localhost:9000',
     ws: true,
     changeOrigin: true
    },
    '/sockjs-node': {
     target: 'http://localhost:9000',
     ws: false,
     changeOrigin: true
    },
}
```

### node 服务端（express+socket.io）

#### 安装

```shell
npm install socket.io --save
```

#### 实现

```js
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server, { allowEIO3: true, cors: true });

server.listen(9000);

// 解决跨域问题
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
});

let user = [];
let userOnline = [];
io.on('connection', function (socket) {
  socket.on('login', function (data) {
    if (socket.client.id in userOnline) {
      console.log('你已经来过了');
    } else {
      user.push({
        id: socket.id,
        name: data.name,
        socket: socket,
      });
      userOnline.push({
        id: socket.id,
        name: data.name,
      });
    }
    socket.emit('online', { user: userOnline });
    socket.broadcast.emit('msg', { user: data.name });
  });
  socket.on('submitmsg', (data) => {
    console.log(data);
    socket.broadcast.emit('msg', data);
  });
  socket.on('disconnect', () => {
    for (let i = 0; i < userOnline.length; i++) {
      if (socket.id === userOnline[i].id) {
        userOnline.splice(i, 1);
      }
    }
    for (let i = 0; i < user.length; i++) {
      if (socket.id === user[i].id) {
        console.log(user[i].name + '走了');
        user.splice(i, 1);
      }
    }
  });
});
```

- 至此便实现了 socket 的简单通讯

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/049cf13f737b46b586120eaa68eb0a17~tplv-k3u1fbpfcp-watermark.image)
