---
title: 文件下载 之response header中获取文件名
theme: default
tag: Javascript
time: 2021.4.28
---

## 文件下载 之 response header 中获取文件名

### 通过 post 获取文件流，并从中获取到文件信息。

- fetch API

- 获取放在 Content-Disposition 的文件信息

- 需要**后端跨域支持**，不然会出现，**响应头为空**的情况,从而得不到文件信息。

- 附源码

```js
   /**
   * 获取文件流，并获取响应头中的文件信息，需要后端跨域支持
   */
  async downloadFile(url, params) {
    const request = {
      body: JSON.stringify(params),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      }
    }
    const response = await fetch(url, request);
    const filename = response.headers.get('Content-Disposition').split(';')[1].split('=')[1];
    const blob = await response.blob()
    const link = document.createElement('a');
    link.download = decodeURIComponent(filename);
    link.style.display = 'none'
    link.href = URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    URL.revokeObjectURL(link.href);
    document.body.removeChild(link);
  }
```
