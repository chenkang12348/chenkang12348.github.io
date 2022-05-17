---
title: 你还不知道怎么取消重复请求？
theme: default
tag: Javascript
time: 2021.6.11
---

## 你还不知道怎么取消重复请求？

![你还不知道怎么取消重复请求？](/articles/1.webp)

### 什么是重复请求？

在 web 开发过程中，我们经常遇见需要取消重复请求的需求，网络不好时，用户可能重复点击某个按钮就触发了多次相同请求。可能会造成数据错乱的问题。

### 如何取消重复请求？

- axios 中提供了 cancelToken 的属性来取消请求。
- 原理就是利用了 XMLHttpRequest 对象上的 abort 方法来取消请求

### 什么样的请求是重复请求？

- 请求方式
- 请求地址
- 请求参数
  以上三者完全一致即认为该请求完全相同

### 部分代码

注意：这里序列化参数这里用了 JSON.stringify，仅做演示，JSON.stringify 存在的缺陷就不在这里赘述了，注意使用。

```js
const instance = axios.create({ timeout: 1000 * 6 });
const pending = [];
const cancelToken = axios.CancelToken;
const removePending = (config) => {
  pending.forEach((item, index) => {
    const requestFunc = config.url.slice(config.url.lastIndexOf('/') + 1); //文件分片不用拦截
    if (requestFunc !== 'filesectioning') {
      if (
        item.requestFlag ===
        `${config.url}&${config.method}&${JSON.stringify(
          config.params
        )}&${JSON.stringify(config.data)}`
      ) {
        item.cancel('取消重复请求');
        pending.splice(index, 1);
      }
    }
  });
};
instance.interceptors.request.use(
  (request) => {
    removePending(request);
    request.cancelToken = new cancelToken((cancel) => {
      const requestFlag = `${request.url}&${request.method}&${JSON.stringify(
        request.params
      )}&${JSON.stringify(request.data)}`;
      pending.push({ requestFlag, cancel });
    });

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
```
