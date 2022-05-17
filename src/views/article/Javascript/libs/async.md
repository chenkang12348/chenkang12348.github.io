---
title: ES6异步解决方案async函数
theme: default
tag: Javascript
time: 2020.6.15
---

## ES6 异步解决方案 async 函数

### Generator 函数

要说到 async 函数就得从 Generator 函数说起，Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。Generator 函数有多种理解角度。从语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。

形式上，Generator 函数是一个普通函数，但是有两个特征。一是，function 关键字与函数名之间有一个星号；二是，函数体内部使用 yield 语句，定义不同的内部状态（yield 语句在英语里的意思就是“产出”）。

```js
function* ImGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var fun = ImGenerator();
```

上面代码定义了一个**Generator**函数 ImGenerator，它内部有两个**yield**语句“hello”和“world”，即该函数有三个状态：hello，world 和 return 语句（结束执行）。

```js
fun.next();
// { value: 'hello', done: false }

fun.next();
// { value: 'world', done: false }

fun.next();
// { value: 'ending', done: true }

fun.next();
// { value: undefined, done: true }
```

Generator 函数的调用方法与普通函数一样，也是在函数名后面加上一对圆括号。不同的是，调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象必须调用遍历器对象的 next 方法，使得指针移向下一个状态。也就是说，每次调用 next 方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个 yield 语句（或 return 语句）为止。换言之，Generator 函数是分段执行的，yield 语句是暂停执行的标记，而 next 方法可以恢复执行。

**yield 语句**,由于 Generator 函数返回的遍历器对象，只有调用 next 方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数。yield 语句就是暂停标志。

（1）遇到 yield 语句，就暂停执行后面的操作，并将紧跟在 yield 后面的那个表达式的值，作为返回的对象的 value 属性值。

（2）下一次调用 next 方法时，再继续往下执行，直到遇到下一个 yield 语句。

（3）如果没有再遇到新的 yield 语句，就一直运行到函数结束，直到 return 语句为止，并将 return 语句后面的表达式的值，作为返回的对象的 value 属性值。

（4）如果该函数没有 return 语句，则返回的对象的 value 属性值为 undefined。

```js
function* gen() {
  yield 123 + 456;
}
```

上面代码中，yield 后面的表达式 123 + 456，不会立即求值，只会在 next 方法将指针移到这一句时，才会求值。yield 语句后面的表达式，只有当调用 next 方法、内部指针指向该语句时才会执行，因此等于为 JavaScript 提供了手动的“惰性求值”（Lazy Evaluation）的语法功能。

yield 语句与 return 语句既有相似之处，也有区别。相似之处在于，都能返回紧跟在语句后面的那个表达式的值。区别在于每次遇到 yield，函数暂停执行，下一次再从该位置继续向后执行，而 return 语句不具备位置记忆的功能。一个函数里面，只能执行一次（或者说一个）return 语句，但是可以执行多次（或者说多个）yield 语句。正常函数只能返回一个值，因为只能执行一次 return；Generator 函数可以返回一系列的值，因为可以有任意多个 yield。从另一个角度看，也可以说 Generator 生成了一系列的值，这也就是它的名称的来历（在英语中，generator 这个词是“生成器”的意思）。

Generator 函数可以不用 yield 语句，这时就变成了一个单纯的暂缓执行函数。

```js
function* f() {
  console.log('执行了！');
}

var generator = f();

setTimeout(function () {
  generator.next();
}, 2000);
```

函数 f 如果是普通函数，在为变量 generator 赋值时就会执行。但是，函数 f 是一个 Generator 函数，就变成只有调用 next 方法时，函数 f 才会执行。

另外需要注意，yield 语句不能用在普通函数中，否则会报错。

### async 函数

ES7 提供了 async 函数，使得异步操作变得更加方便。async 函数是什么？一句话，async 函数就是前文 Generator 函数的语法糖。

前文有一个 Generator 函数

```js
function* ImGenerator() {
  yield Fun1();
  yield Fun2();
  yield Fun3();
}

var fun = ImGenerator();
```

写成 async 函数，就是下面这样。

```js
async ImGenerator() {
  await Fun1();
  await Fun2();
  await Fun3();
}

var fun = ImGenerator();
```

一比较就会发现，async 函数就是将 Generator 函数的星号（\*）替换成 async，将 yield 替换成 await，仅此而已。

async 函数对 Generator 函数的改进，体现在以下四点。

（1）内置执行器。Generator 函数的执行必须靠执行器，而 async 函数自带执行器。也就是说，async 函数的执行，与普通函数一模一样，只要一行。
(上面的代码调用了 ImGenerator 函数，然后它就会自动执行，输出最后结果。这完全不像 Generator 函数，需要调用 next 方法，才能得到真正执行，得到最后结果。)

（2）更好的语义。async 和 await，比起星号和 yield，语义更清楚了。async 表示函数里有异步操作，await 表示紧跟在后面的表达式需要等待结果。

（4）返回值是 Promise。async 函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了。你可以用 then 方法指定下一步的操作。

进一步说，async 函数完全可以看作多个异步操作，包装成的一个 Promise 对象，而 await 命令就是内部 then 命令的语法糖。

### async 函数简单用法

async 函数的语法规则总体上比较简单，难点是错误处理机制

（1）async 函数返回一个 Promise 对象,async 函数内部 return 语句返回的值，会成为 then 方法回调函数的参数。

```js
async function Fun() {
  return 'hello world';
}

Fun().then((v) => console.log(v));
// "hello world"
```

上面代码中，函数 Fun 内部 return 命令返回的值，会被 then 方法回调函数接收到。

async 函数内部抛出错误，会导致返回的 Promise 对象变为 reject 状态。抛出的错误对象会被 catch 方法回调函数接收到。

```js
async function Fun() {
  throw new Error('出错了');
}

Fun().then((v) => console.log(v));
// Error: 出错了
```

（2）async 函数返回的 Promise 对象，必须等到内部所有 await 命令的 Promise 对象执行完，才会发生状态改变。也就是说，只有 async 函数内部的异步操作执行完，才会执行 then 方法指定的回调函数。

（3）正常情况下，await 命令后面是一个 Promise 对象。如果不是，会被转成一个立即 resolve 的 Promise 对象。

### async 函数简单实现（Generator 函数）

```js
async function fn(args) {
  // ...
}

// 等同于

function fn(args) {
  return spawn(function* () {
    // ...
  });
}
```

### 注意

(1) await 命令后面的 Promise 对象，运行结果可能是 rejected，所以最好把 await 命令放在 try...catch 代码块中。

```js
async function myFunction() {
  try {
    await somethingThatReturnsAPromise();
  } catch (err) {
    console.log(err);
  }
}

// 另一种写法

async function myFunction() {
  await somethingThatReturnsAPromise()
  .catch(function (err) {
    console.log(err);
  };
}
```

(2)多个 await 命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。

(3) await 命令只能用在 async 函数之中，如果用在普通函数，就会报错。
