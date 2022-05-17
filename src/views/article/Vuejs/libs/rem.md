---
title: Vue中使用rem移动端适配方案
theme: default
tag: Vuejs
time: 2020.9.29
---

Vue 中使用 rem 移动端适配方案

1. 安装依赖

```shell
npm install postcss-pxtorem -D
```

2. 初始化根标签字体大小，设置 px 与 rem 的关系

```js
const baseSize = 46; //根据UI尺寸决定

function setRem() {
  const scale = document.documentElement.clientWidth / 1080; //UI尺寸决定

  document.documentElement.style.fontSize =
    baseSize * Math.min(scale, 2) + 'px';
}
setRem();
window.onresize = function () {
  setRem();
};
```

3. 在 main 引入文件

```js
import './utils/rem.js';
```

4. 设置规则（更改 postcss.config.js,该文件为使用 vue-cli3 自动创建的文件）

```js
module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 46,
      propList: ['*'],
    },
  },
};
```
