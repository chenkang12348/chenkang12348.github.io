---
title: call、apply、bind详解
theme: default
tag: Javascript
time: 2020.10.18
---

## call、apply、bind 详解

三者都是改变函数执行时的上下文，也就是就是改变 this 的指向。

### call(obj,arg1,arg2) //call()的参数一个一个的传

函数.call(第一个参数:想让函数中 this 指向谁,就传谁进来,
后面的参数:本身函数需要传递实参,需要几个实参,就一个一个的传递即可);
call 的作用: 1. 调用函数 2.指定函数中 this 指向

### apply(obj,[arg1,arg2] //apply()的第二个参数则是一个数组

函数.apply(第一个参数:想让函数中 this 指向谁,就传谁进来,
第二个参数:要求传入一个数组,数组中包含了函数需要的实参)
apply 的作用: 1. 调用函数 2, 指定函数中 this 的指向

### bind(this) // bind()返回的其实是一个函数，并不会立即执行。

函数.bind(第一个参数:想让函数中 this 指向谁,就传谁进来,
后面的参数:本身函数需要传递实参,需要几个实参,就一个一个的传递即可)
bind 的作用: 1. 克隆当前函数,返回克隆出来的新的函数
　　　　 2. 新克隆出来的函数,这个函数的 this 被指定了

看下面例子就明白了：

```js
let obj  = {
  name: "Thezero",
  say: function(){
    return this.name
  }
}
let obj2 = {
  name: "萤火之森"
}
console.log(obj.say.apply(obj2)); / /萤火之森
console.log(obj.say.call(obj2)); //  萤火之森
console.log(obj.say.bind(obj2)); // function(){return this.age}
```

## 手写实现 call

```js
Function.prototype.myCall = function (myThis, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('not a function!');
  }
  const fn = Symbol('fn');
  myThis = myThis || window;
  myThis[fn] = this;
  // this指向调用call的对象,即我们要改变this指向的函数
  const result = myThis[fn](...args);
  // 执行当前函数
  delete myThis[fn];
  // 删除我们声明的fn属性
  return result;
  // 返回函数执行结果
};
```

## 手写实现 apply

```js
Function.prototype.myApply = function (myThis, args = []) {
  if (typeof this !== 'function') {
    throw new TypeError('not a function!');
  }
  const fn = Symbol('fn');
  myThis = myThis || window;
  myThis[fn] = this;
  // this指向调用call的对象,即我们要改变this指向的函数
  const result = myThis[fn](...args);
  // 执行当前函数
  delete myThis[fn];
  // 删除我们声明的fn属性
  return result;
  // 返回函数执行结果
};
```

## 手写实现 bind

```js
Function.prototype.myBind = function (myThis, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('not a function!');
  }
  const self = this;
  const fbound = function () {
    self.apply(
      this instanceof self ? this : myThis,
      args.concat(Array.prototype.slice.call(arguments))
    );
  };
  // 继承原型上的属性和方法
  fbound.prototype = Object.create(self.prototype);
  return fbound;
};
```
