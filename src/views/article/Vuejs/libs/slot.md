---
title: vue插槽的基本使用
theme: default
tag: Vuejs
time: 2020.12.7
---

## vue 插槽的基本使用

### vue 提供了三种插槽：匿名插槽，具名插槽，作用域插槽

### 匿名插槽

子组件定义了 solt，但未提供名字，这就是匿名插槽，也叫做默认插槽，只要出现的父组件中，未指定插槽名字的内容，都会默认放到匿名插槽里。

子组件

```vue
<template>
  <div><slot></slot>//匿名插槽</div>
</template>
```

父组件

```vue
<template>
  <div>
    <myComponent>我被放进了插槽中</myComponent>
  </div>
</template>
```

#### 默认值

当父组件没有提供内容的时候，会默认渲染插槽内的内容，传值则会被替换

#### 具名插槽

所谓具名插槽，就是给插槽命了名字，父组件放进来的内容，需要指定插槽的名称，这个时候才会被分发到这个具名插槽中。

子组件

```vue
<template>
  <div>
    <div class="slot1">
      <slot name="slot1"></slot>
      <!-- 名为“slot1”的具名插槽 -->
    </div>
    <div class="slot2">
      <slot></slot>
      <!-- 匿名插槽 -->
    </div>
  </div>
</template>
```

父组件

```vue
<template>
  <div>
    <myComponent>
      <template v-slot:slot1>
        <p>名为slot1的具名插槽中</p>
      </template>
      <!-- 这个会放到solt1中 -->
      <p>啦啦啦啦德玛西亚</p>
      <!-- 这个会放到默认插槽中 -->
    </myComponent>
  </div>
</template>
```

#### 作用域插槽

有时让插槽内容能够访问子组件中才有的数据是很有用的。所以提供了作用域插槽

```vue
<span>
  <slot v-bind:user="user">
    {{ user.lastName }}
  </slot>
</span>
```

绑定在 `<slot>` 元素上的 attribute 被称为插槽 prop。现在在父级作用域中，我们可以使用带值的 v-slot 来定义我们提供的插槽 prop 的名字：

```vue
<current-user>
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </template>
</current-user>
```

### 总结一点就是可以在父组件访问到子组件的数据,相当于函数传参。

### 注意

- 注意默认插槽的缩写语法不能和具名插槽混用，因为它会导致作用域不明确：
- 只要出现多个插槽，请始终为所有的插槽使用完整的语法

```vue
<todo-list v-bind:todos="todos">
  <template v-slot:todo="{ todo }">
    <span v-if="todo.isComplete">✓</span>
    {{ todo.text }}
  </template>
</todo-list>
```
