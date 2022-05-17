---
title: node发送邮件
theme: default
tag: Nodejs
time: 2020.9.26
---

## node 发送邮件

### 准备工作

为了实现这个功能，你首先要有一个邮箱；由于需要使用 SMTP 方式发送，你还需要开启相关功能。你可以登录你的邮箱，然后开启这个设置，以 QQ 邮箱为例（其他邮箱也差不多，主要开启服务获取到授权码就可以了）：

![QQ图片20200929192327.png](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c248fbe0ed3a44f1af8e90ae2d9f623a~tplv-k3u1fbpfcp-zoom-1.image)

**2.安装模块 nodemailer（当然也有其他的邮件模块，可以自行选择）**

```shell
npm install nodemailer --save
```

### 引入模块

```js
const nodemailer = require('nodemailer');
```

### 简单配置（这里只是一些简单的配置项，更多配置请查看官网，其实都是大同小异，需要什么添加什么就可以了）

```js
let config = {
  service: 'qq',
  // host: "smtp.qq.com", //邮箱服务的主机，如smtp.qq.com
  port: '465', //对应的端口号
  secureConnection: true,
  //secureConnection:false,
  //用户信息
  auth: {
    user: '前期准备的邮箱',
    pass: '授权码',
  },
};
const transporter = nodemailer.createTransport(config);
```

### 当然你也可以单独抽离为一个模块方便后期使用(email.js)

```js
//引入模块
const nodemailer = require('nodemailer');

//设置邮箱配置
let config = {
  service: 'qq',
  // host: "smtp.qq.com", //邮箱服务的主机，如smtp.qq.com
  port: '465', //对应的端口号
  secureConnection: true,
  //secureConnection:false,
  //用户信息
  auth: {
    user: '前期准备的邮箱',
    pass: '授权码',
  },
};
const transporter = nodemailer.createTransport(config);

const sendQQemail = function (mailOptions) {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) return console.log(error);
    console.log(`Message: ${info.messageId}`);
    console.log(`sent: ${info.response}`);
  });
};
exports.sendQQemail = sendQQemail;
```

到这里你就可以完成一些简单的邮件发送了。
