---
title: 插件一键去水印，岂不妙哉！
theme: default
tag: Tool
time: 2021.8.1
---

## 插件一键去水印，岂不妙哉！

### 背景

前端做一些个人项目，没有 UI 实在太难搞了，PS 又需要学习成本，就想着用一些设计网站做一些图，做好之后发现要 Vip，想着个人项目不商用，截个图，做一下效果，做着做着就想是不是做一个插件自动去一下水印岂不是更好。

### 说干就干

- 粗略的学习了一下谷歌插件
  - [【干货】Chrome 插件(扩展)开发全攻略](https://www.cnblogs.com/liuxianan/p/chrome-plugin-develop.html)
- 分析一下某站的水印位置（明水印，听大佬说有暗水印，暂不考虑）
  - 手动分析（F12 直接看，哈哈）
- 发现水印处于 image-watermark 该类名的背景图片位置
- 还有一些可能是一个单独的元素。
- 接下来就是找到该元素删除即可（手动删除也可以，以前就是这样干的）

### 谷歌插件

- 编写一些简单的操作界面（popup.html）

![c419bbd0143a4b2a8e21d0114676b2bd_tplv-k3u1fbpfcp-watermark.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/77a94128224a4f8abebfb3916545ae2e~tplv-k3u1fbpfcp-watermark.image)

- 采用 html2canvas 来下载图

  - 将 dom 转成图片

```javascript

const downloadPng = () => {
if(!shareContent) return
let rect = shareContent.getBoundingClientRect()
let opts = {
    x: rect.left,
    y: rect.top,
    scale: window.devicePixelRatio*2,
    useCORS: true ,
}
html2canvas(shareContent, opts).then(canvas => {
    let img = new Image();
    img.src = canvas.toDataURL();
    var a = document.createElement('a');
    a.download = '无水印图'
    a.href = img.src;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

```

- html2canvas 的坑实在有点多，图片跨域问题设置 useCORS: true
- 部分样式问题，暂无法解决

- 就简单的 popup.js 与 content.j 简单的通信一些就可以完成

```javascript
function sendMessageToContentScript(message, callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
      if (callback) callback(response);
    });
  });
}
```

```javascript
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.remove) {
    removeFigureMonster();
  }
  if (request.download) {
    downloadPng();
  }
});
```

- manifest.json 文件是插件核心文件

```json
{
  "manifest_version": 2,
  "name": "去水印！",
  "version": "0.0.1",
  "description": "去除主流作图网站的明水印，并下载！",
  "icons": {
    "16": "libs/icon/logo1.png",
    "48": "libs/icon/logo1.png",
    "128": "libs/icon/logo1.png"
  },
  "background": {
    "page": "libs/html/background.html"
  },
  "browser_action": {
    "default_icon": "libs/icon/logo1.png",
    "default_title": "去除主流作图网站的明水印，并下载！",
    "default_popup": "libs/html/popup.html"
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["/libs/plugin/htmltocanvas.js", "libs/js/content.js"],
      "run_at": "document_start"
    }
  ],
  "permissions": ["contextMenus"]
}
```

### 自此一个谷歌插件就简单的完成

- 可以一键去水印然后下载
- 应该其他设计网站大同小异

### 源代码

- [源代码,随手写的不用 star，自取](https://github.com/aqlmc/remove-watermask)

### 最后

以上仅仅为技术交流~ 大家不要在实际的场景盲目使用，使用正规的途径。商用还需购买版权，支持原创！

### 参考文档

1、[从破解某设计网站谈前端水印(详细教程)](https://juejin.cn/post/6900713052270755847)

2、[【干货】Chrome 插件(扩展)开发全攻略](https://www.cnblogs.com/liuxianan/p/chrome-plugin-develop.html)
