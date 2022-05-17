---
title: vue中的依赖注入 provide 和 inject
theme: default
tag: Vuejs
time: 2020.10.11
---

## vue 中的依赖注入 provide 和 inject

![vue.jpg](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f3167467ed314cf88e3766c92629e8d7~tplv-k3u1fbpfcp-zoom-1.image)
provide 选项允许我们指定我们想要提供给后代组件的数据/方法。

**下面是一个组价刷新的案列**

```vue
<template>
  <div >
    <div class="view">
      <router-view v-if="isRouterAlive"></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isRouterAlive: true
    }
  },
  provide() {
    return {
      reload: this.reload
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function() {
        this.isRouterAlive = true
      })
    }
  }
}

```

然后在任何后代组件里，我们都可以使用 inject 选项来接收指定的我们想要添加在这个实例上的属性：

```
inject: ['reload']
```

注：依赖注入所提供的属性是非响应式
