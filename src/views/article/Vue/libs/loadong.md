---
title: vue自定义指令之v-loading（附源码，可CV）
theme: default
tag: Vuejs
time: 2021.4.3
---

组件 API：[TigerUi：http://tigerui.xkongkeji.com](http://tigerui.xkongkeji.com/#loading-%E5%8A%A0%E8%BD%BD)

### 效果图

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fda944b6929146fd86076ec5412e6e97~tplv-k3u1fbpfcp-watermark.image)

![soogif.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/34d8e9b2026041f4a1fffd87127f0185~tplv-k3u1fbpfcp-watermark.image)

### 结构

```vue
<template>
  <div :class="['ti-loading', 'ti-' + type]">
    <div class="loader-inner">
      <div class="loader-line-wrap">
        <div class="loader-line"></div>
      </div>
      <div class="loader-line-wrap">
        <div class="loader-line"></div>
      </div>
      <div class="loader-line-wrap">
        <div class="loader-line"></div>
      </div>
      <div class="loader-line-wrap">
        <div class="loader-line"></div>
      </div>
      <div class="loader-line-wrap">
        <div class="loader-line"></div>
      </div>
      <span v-if="text" class="loading-text">{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TiLoading',
  props: ['text', 'type'],
};
</script>

<style lang="scss" scoped>
.ti-service {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99999;
}
.ti-directive {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99999;
}
.ti-loading {
  background: #000;
  background: radial-gradient(#222, #000);
  opacity: 0.5;
  overflow: hidden;
}

.loader-inner {
  bottom: 0;
  height: 60px;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  width: 100px;
}
.loading-text {
  position: absolute;
  left: 50%;
  bottom: -70px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  transform: translateX(-50%);
  color: #409eff;
}
.loader-line-wrap {
  animation: spin 2000ms cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
  box-sizing: border-box;
  height: 50px;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  transform-origin: 50% 100%;
  width: 100px;
}
.loader-line {
  border: 4px solid transparent;
  border-radius: 100%;
  box-sizing: border-box;
  height: 100px;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  top: 0;
  width: 100px;
}
.loader-line-wrap:nth-child(1) {
  animation-delay: -50ms;
}
.loader-line-wrap:nth-child(2) {
  animation-delay: -100ms;
}
.loader-line-wrap:nth-child(3) {
  animation-delay: -150ms;
}
.loader-line-wrap:nth-child(4) {
  animation-delay: -200ms;
}
.loader-line-wrap:nth-child(5) {
  animation-delay: -250ms;
}

.loader-line-wrap:nth-child(1) .loader-line {
  border-color: hsl(0, 80%, 60%);
  height: 90px;
  width: 90px;
  top: 7px;
}
.loader-line-wrap:nth-child(2) .loader-line {
  border-color: hsl(60, 80%, 60%);
  height: 76px;
  width: 76px;
  top: 14px;
}
.loader-line-wrap:nth-child(3) .loader-line {
  border-color: hsl(120, 80%, 60%);
  height: 62px;
  width: 62px;
  top: 21px;
}
.loader-line-wrap:nth-child(4) .loader-line {
  border-color: hsl(180, 80%, 60%);
  height: 48px;
  width: 48px;
  top: 28px;
}
.loader-line-wrap:nth-child(5) .loader-line {
  border-color: hsl(240, 80%, 60%);
  height: 34px;
  width: 34px;
  top: 35px;
}

@keyframes spin {
  0%,
  15% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
```

### 服务开启模式

```js
import Vue from 'vue';
import loadingBase from './main.vue';
const loadingConstructor = Vue.extend(loadingBase);
/**
 * @Function open 打开loading
 * @Function close 关闭lading
 */
class serviceLoading {
  constructor() {
    this._instance_ = null;
    this._parent_ = null;
    this._loadingList_ = [];
    this.overflow = false; // 判断滚动条是否处于禁用状态
  }
  /**
   * @param {string} options  加载信息（可选）
   * @param {string} el  loading挂载的位置，默认挂载在body
   */
  open(options, el = null) {
    let id = this._loadingList_.length;
    if (!el) {
      this._parent_ = document.body;
    } else if (isHTMLElement(el)) {
      this._parent_ = el;
    } else {
      this._parent_ = document.querySelector(el);
    }
    if (!options.type) options.type = 'service';
    this._instance_ = new loadingConstructor({
      el: document.createElement('div'),
      propsData: options,
    });
    if (options.type === 'service') {
      document.body.parentNode.style.overflow = 'hidden';
      this.overflow = true;
    }
    this._parent_.appendChild(this._instance_.$el);
    this._loadingList_.push({
      id: id,
      parent: this._parent_,
      _instance: this._instance_,
      type: options.type,
    });
    this._parent_ = null;
    this._instance_ = null;
    return id;
  }
  /**
   *
   * @param {number} num loading标识数字
   */
  close(id) {
    for (let i = 0; i < this._loadingList_.length; i++) {
      if (Number(id) === this._loadingList_[i].id || !id) {
        this._loadingList_[i].parent.removeChild(
          this._loadingList_[i]._instance.$el
        );
        if (this.overflow && this._loadingList_[i].type === 'service') {
          document.body.parentNode.style.overflow = 'auto';
          this.overflow = false;
        }
        this._loadingList_.splice(i, 1);
      }
    }
  }
}
function isHTMLElement(obj) {
  if (obj.nodeType && obj.nodeType === 1) {
    return true;
  } else {
    return false;
  }
}
export default new serviceLoading();
```

### 指令开启模式

```js
import serviceLoading from './service';
const directiveLoading = {
  name: 'loading',
  bindFunctions: {
    inserted: function (el, binding) {
      if (binding.value) {
        el.classList.add('ti-loading-parent');
        let text = el.getAttribute('ti-loading-text');
        let id = serviceLoading.open(
          {
            type: 'directive',
            text: text,
          },
          el
        );
        el.setAttribute('loadingId', id);
      }
    },
    update: function (el, binding) {
      if (!binding.value) {
        el.classList.remove('ti-loading-parent');
        let id = el.getAttribute('loadingId');
        if (id) {
          serviceLoading.close(id);
        }
      } else {
        el.classList.add('ti-loading-parent');
        let text = el.getAttribute('ti-loading-text');
        let id = serviceLoading.open(
          {
            type: 'directive',
            text: text,
          },
          el
        );
        el.setAttribute('loadingId', id);
      }
    },
  },
};
export default directiveLoading;
```
