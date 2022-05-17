---
title: 【拿来吧你】装饰器
theme: default
tag: Javascript
time: 2021.8.2
---

## 【拿来吧你】装饰器

许多面向对象的语言都有修饰器（Decorator）函数，用来修改，或者注释类的行为。js 也不例外。

### 装饰器能做什么

- 传入参数的类型判断
- 返回值的排序、过滤
- 对函数添加节流、防抖或其他的功能性代码
- 基于多个类的继承，各种各样的与函数逻辑本身无关的、重复性的代码
- 等等。。。

### 装饰器基本语法

```js
@decorator
class MyClass {}
// 等同于
class MyClass {}
A = decorator(MyClass) || MyClass;
```

从上面就可以看出，修饰器是一个对类进行处理的函数。修饰器函数的第一个参数，就是所要修饰的目标类。

```js
function decorator(target) {
     这里可以对类添加一些属性，或者方法，其他一些对类的操作。
}
```

### 装饰器的执行顺序

同一处的多个装饰器是按照洋葱模型，由外到内进入，再由内到外执行（和 Koa 的洋葱模型一致）

![src=http___image1.bubuko.com_info_202005_20200508002820794838.png&refer=http___image1.bubuko.jpg](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/91778da674e2476bbba8a25f4eb82dac~tplv-k3u1fbpfcp-watermark.image)

```js
function dec(id) {
  console.log('evaluated', id);
}

class Example {
  @dec(1)
  @dec(2)
  method() {}
}
// evaluated 1
// evaluated 2
```

### 修饰类的方法（实现一个对属性的 readonly 装饰器）

```js
class Person {
  @readonly
  name() {
    return '我是xxx';
  }
}

function readonly(target) {
  // target对象原来的值如下
  // {
  //   value: specifiedFunction,
  //   enumerable: false,
  //   configurable: true,
  //   writable: true
  // };
  target.writable = false;
}
```

## 注意

- 装饰器在 js 中仅仅可以修饰类和属性，不能修饰独立的函数，函数存在变量提升。
- 装饰器对类的行为的改变，是代表编译时发生的，而不是在运行时。
- 装饰器能在编译阶段运行代码。
- 装饰器的顺序十分重要。
- 合理利用装饰器可以极大的提高开发效率，对一些非逻辑相关的代码进行封装提炼能够帮助我们快速完成重复性的工作，节省时间。
- 大量的装饰器可能会导致不可读性增强，谨慎食用。

## 参考

1、[JS 装饰器（Decorator）场景实战](https://juejin.cn/post/6844903506562777101)

2、[ECMAScript 6 入门---阮一峰](https://es6.ruanyifeng.com/#docs/decorator)
