---
title: 你真的了解prototype和__proto__吗
theme: default
tag: Javascript
time: 2021.3.29
---

## 你真的了解 prototype 和**proto**吗

### 一句话的图解：**实例对象的隐式原型指向构造函数的的原型对象**

![原型.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cc97d23d54324e74b8cb4e219c344aa0~tplv-k3u1fbpfcp-watermark.image)

### 什么是 prototype

- javascript 只有函数默认拥有 prototype 属性，由构造函数构造出来的实例默认是不具有扩展的，除非手动给这个实例加上扩展（当然这已经不是 prototype 了，仅是一个名叫 prototype 的属性而已）。
- 在 JS 里，万物皆对象。方法(Function)是一个对象，方法的原型(Function.prototype)是对象。
- prototype 是一个拥有 [[Construct]] 内部方法的对象才有的属性。

  例如函数，对象的方法，ES6 中的类。注意 ES6 中的箭头函数没有 [[Construct]] 方法，因此没有 prototype 这个属性，除非你为它添加一个。

### 什么是**proto**

- **proto**就是连接两个实例与原型之间的桥梁，就是我们通常所说的原型链，**proto**指向构造函数的 prototype 。**proto**的作用是创建一个原型链，要通过**proto**，你才能不断的找到所谓的父原型。
- 每个对象都有一个**proto**属性

### 什么是原型链

- JavaScript 可以通过 prototype 和**proto**在两个对象之间创建一个关联，使得一个对象就可以通过委托访问另一个对象的属性和函数。
- 这样的一个关联就是原型链，一个由对象组成的有限对象链，用于实现继承和共享属性。
