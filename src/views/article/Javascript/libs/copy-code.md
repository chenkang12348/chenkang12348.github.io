---
title: 粘贴板之二维码复制
theme: default
tag: Javascript
time: 2021.5.18
---

## 粘贴板之二维码复制

![粘贴板之二维码复制](/articles/4.webp)

### 说一点废话

复制网页上的二维码，并分享到的聊天工具中,是特别常见的功能。在网上找了很多资料，大部分都是坑。

### 解决思路

- 使用 navigator.permissions api 查询浏览器是否支持粘贴板操作
- 使用 fetch 请求二维码 文件流
- 将文件流转化为 blob
- 使用 navigator.clipboard.write 将文件 blob 写入粘贴板

### 未解决的问题

- 粘贴板在不安全的环境中会有限制，可能导致复制失败。建议在 https 环境中使用
- 老旧项目慎重 CV，具有一定的兼容性问题

### 查询浏览器是否支持访问粘贴板权限

```js
getAuthClipboard(): void {
    navigator.permissions.query({
      name: 'clipboard-write'
    }).then( async permissionStatus => {
      // permissionStatus.state 的值是 'granted'、'denied'、'prompt':
      if (permissionStatus.state === 'granted') {
         this.copyQRcode();
      } else {
        this.message.error('没有获得粘贴板读取权限');
        if (navigator.permissions.request) {
        // 尝试请求获取，navigator.permissions.request API有些浏览器不支持
          navigator.permissions.request({ name: 'clipboard-write' });
        }
      }
    });
  }
```

### 复制二维码

```js
  async copyQRcode() {
     const request = {
       method: 'get',
       headers: {
         'Content-Type': 'application/octet-stream;charset=UTF-8',
         'Authorization': StorageUtil.getLocalStorage('token'), //携带自己的token
       }
     };
     const data = await fetch(this.QRcode, request);
     const blob = await data.blob();
     await navigator.clipboard.write([
       new ClipboardItem({
         [blob.type]: blob
       })
     ]).catch(err => {
       this.message.error('复制失败');
     });
     this.message.success('复制成功');
  }
```
