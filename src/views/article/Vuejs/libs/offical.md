---
title: 拜读vue官方文档
theme: default
tag: Vuejs
time: 2020.12.7
---

## 拜读 vue 官方文档

### 1、不要在生命周期函数上使用箭函数

```js
created: () => console.log(this.a);
// 或
vm.$watch('a', (newValue) => this.myMethod());
```

因为箭头函数并没有 this，this 会作为变量一直向上级词法作用域查找，直至找到为止，经常导致 Uncaught TypeError: Cannot read property of undefined 或 Uncaught TypeError: this.myMethod is not a function 之类的错误。

### 2、v-show 不支持 template 元素，也不支持 v-else。

### 3、当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级。

### 4、使用修饰符时，顺序很重要（从左到右）

- v-on:click.prevent.self 会阻止所有的点击，
- v-on:click.self.prevent 只会阻止对元素自身的点击。

### 5、当一个 ViewModel 被销毁时，所有的事件处理器都会自动被删除。你无须担心如何清理它们。

### 6、prop 会在一个组件实例创建之前进行验证

所以实例的 property (如 data、computed 等) 在 default 或 validator 函数中是不可用的。

### 7、.sync 修饰符的 v-bind 不能和表达式一起使用

- 例如 v-bind:title.sync=”doc.title + ‘!’” 是无效的。
- 当我们用一个对象同时设置多个 prop 的时候，也可以将这个 .sync 修饰符和 v-bind 配合使用：

```html
<text-document v-bind.sync="doc"></text-document>
```

将 v-bind.sync 用在一个字面量的对象上，例如 v-bind.sync=”{ title: doc.title }”，是无法正常工作的，因为在解析一个像这样的复杂表达式的时候，有很多边缘情况需要考虑。

### 8、注意这个 keep-alive 要求被切换到的组件都有自己的名字，不论是通过组件的 name 选项还是局部/全局注册。

### 9、refs 只会在组件渲染完成之后生效，并且它们不是响应式的。这仅作为一个用于直接操作子组件的“逃生舱”——你应该避免在模板或计算属性中访问 $refs。

### 10、mixin 混入

- 数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。
- 同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。
- Vue.extend() 也使用同样的策略进行合并。
