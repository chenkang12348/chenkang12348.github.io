---
title: Vue3 Hook 到底是啥黑魔法？
theme: default
tag: Vuejs
time: 2021.7.29
---

早就听说，`React`社区，已经全面拥抱`Hook`。`Vue3`的发布也支持了自定义`Hook`，作为只会`Vue`的前端小码农自然要去看看`Vue3 Hook`到底是啥黑魔法？

个人博客网站欢迎交流：[萤火之森：https://blog.xkongkeji.com](https://blog.xkongkeji.com)

### 从不了解React Hook的角度来看一下啥是Hook？

- Vue 官方给出的自定义 `Hook` 的例子是这样的：

```javascript

import { ref, onMounted, onUnmounted } from "vue";

export function useMousePosition() {
  const x = ref(0);
  const y = ref(0);

  function update(e) {
    x.value = e.pageX;
    y.value = e.pageY;
  }

  onMounted(() => {
    window.addEventListener("mousemove", update);
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", update);
  });

  return { x, y };
}
```
组件中使用：
```javascript

import { useMousePosition } from "./mouse";

export default {
  setup() {
    const { x, y } = useMousePosition();
    return { x, y };
  },
};

```
相信写`vue2`的小伙伴应该都有被`Mixin`支配过，特别是拿到应该不熟悉的项目的时候，简直是噩梦，各种`Mixin`，各种变量，方法，完全看不出从哪来的。

从代码中使用中可以清晰的找到鼠标位置`X`,`Y`来自于`useMousePosition`函数，`useMousePosition`就是一个函数，使用了`composition-api`定义了响应式数据`X`，`Y`然后导出，个人感觉是将`mixin`拆分了，将导入的操作交给了开发者，以前是vue直接帮我们把数据合并在了一起，反而导致了数据无从溯源的问题。

#### 个人理解，欢迎纠正
- `hook`可以当作以前`mixin`的来用
- `hook`是一个函数，`mixin`是一个对象
- `hook`就是拆分版的`mixin`，将导入操作交给开发者，`mixin`是根据对应的`options Api`直接merge到组件了
- `hook`可以借用`composition-api`完全使用`vue`的能力，简而言之就是你在`setup`函数用能用的`hook`都能用.
### 参考
1、[精读《Vue3.0 Function API》] https://juejin.cn/post/6844903877574295560

2、[Vue3 究竟好在哪里？（和 React Hook 的详细对比）])]https://segmentfault.com/a/1190000022616689