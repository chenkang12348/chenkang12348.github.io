---
title: QQ互联避坑指南
theme: default
tag: InformalEssay
time: 2020.9.29
---

# QQ 互联避坑指南

## 申请 APPID

在 QQ 互联官网 h【ttp://connect.qq.com/】申请,根据项目需要，申请相应的接入。

### 按照官网指示操作注册成为开发者

![QQ图片20200913104031.png](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/75886935efc0429c97bc490083376df9~tplv-k3u1fbpfcp-zoom-1.image)

#### 注册成功后就可以创建自己的应用

![QQ图片20200913104407.png](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/109325c623df4722a26ead7545df8758~tplv-k3u1fbpfcp-zoom-1.image)

#### 审核成功后就可以得到自己的 APPID 与 APP KEY 这两个都会在后续接入中用到

![QQ图片20200913103738.png](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d1c3955af5894ccba52401220188f6d0~tplv-k3u1fbpfcp-zoom-1.image)

## 放置 QQ 登录按钮

网站需要下载“QQ 登录”按钮图片，并按照 UI 规范将按钮放置在页面合适的位置。

## 获取 Authorization Code

#### 打开浏览器，访问如下地址（请将 client_id，redirect_uri，scope 等参数值替换为你自己的）：

```
https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=[YOUR_APPID]&redirect_uri=[YOUR_REDIRECT_URI]&scope=[THE_SCOPE]
```

#### 如果用户已经有登录态，会弹出提示一个确认页。如果还没有登录，会弹出登录页

#### 成功登录后，弹出授权框引导用户授权（仅在第一次成功登录，以及第一次访问某个未授权的 OpenAPI 时会出现授权页）

注：
如果用户点击“跳过”，则跳转到回调地址，返回默认的头像、昵称和性别。
建议第三方应用控制授权项，即参数 scope 中只传入必须使用的 OpenAPI 名称。因为授权项越多，用户越有可能拒绝授权。

#### 如果用户点击“确认”授权，则成功跳转到指定的 redirect_uri，并跟上 Authorization Code（注意此 code 会在 10 分钟内过期）。

例如回调地址是：www.qq.com/qq，则会跳转到：
**http://www.qq.com/qq?code=520DD95263C1CFEA0870FBB66E**

## 通过 Authorization Code 获取 Access Token

#### 发送请求到如下地址（请将参数值替换为你自己的）：

```
https://graph.qq.com/oauth2.0/token?grant_type=authorization_code&client_id=[YOUR_APP_ID]&client_secret=[YOUR_APP_Key]&code=[The_AUTHORIZATION_CODE]&redirect_uri=[YOUR_REDIRECT_URI]
```

#### 即可获取到 Access Token：

```
access_token=YOUR_ACCESS_TOKEN&expires_in=3600
```

#### 示例

```js
let AccessToken = await axios({
  url:
    'https://graph.qq.com/oauth2.0/token?grant_type=authorization_code&client_id=101905280&client_secret=[自己的APPKEY]&code=' +
    req.query.code +
    '&redirect_uri=' +
    encodeURI('http://www.xkongkeji.com/qq'),
  method: 'GET',
}).catch((err) => {
  return;
});
```

注：返回值需要自己根据需要重新处理

## 使用 Access Token 来获取用户的 OpenID

#### 发送请求到如下地址（请将 access_token 等参数值替换为你自己的）：

```
https://graph.qq.com/oauth2.0/me?access_token=YOUR_ACCESS_TOKEN
```

#### 获取到用户 OpenID，返回包如下：

```js
callback({ client_id: 'YOUR_APPID', openid: 'YOUR_OPENID' });
```

#### 示例

```js
let OpenId = await axios({
  url: 'https://graph.qq.com/oauth2.0/me?access_token=' + AccessToken,
  method: 'get',
}).catch((err) => {
  return;
});
```

注：返回值需要自己根据需要重新处理

## 使用 Access Token 以及 OpenID 来访问用户数据

#### 建议网站在用户登录后，即调用 get_user_info 接口，获得该用户的头像、昵称并显示在网站上，使用户体验统一。

#### 发送请求到 get_user_info 的 URL（请将 access_token，appid 等参数值替换为你自己的）：

```
https://graph.qq.com/user/get_user_info?access_token=YOUR_ACCESS_TOKEN&oauth_consumer_key=YOUR_APP_ID&openid=YOUR_OPENID
```

#### 成功返回后，即可获取到用户数据：

```json
{
   "ret":0,
   "msg":"",
   "nickname":"YOUR_NICK_NAME",
   ...
}
```

#### 示例

```js
let UserInfo = await axios({
  url: `https://graph.qq.com/user/get_user_info?access_token=${AccessToken}&oauth_consumer_key=${APPID}&openid=${OpenIdObj.openid}`,
  method: 'get',
}).catch((err) => {
  return;
});
```

至此我们就得到了用户信息，可以进行自己的相关逻辑操作
