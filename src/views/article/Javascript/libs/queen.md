---
title: 手撕数据结构----队列与优先队列
theme: default
tag: Javascript
time: 2020.10.28
---

## 手撕数据结构----队列与优先队列

### 什么是队列（先进先出）

队列，和栈有点类似，但是又不太一样，队列遵循先进先出的原则。
列就是排队，在前面的人先享受服务，完后前面的人先走。

### 普通队列

```js
/**
 * 普通队列
 */
class Queue {
  constructor() {
    this.list = [];
  }
  push(val) {
    return this.list.push(val);
  }
  pop() {
    return this.list.shift();
  }
  peck() {
    return this.list[0];
  }
  size() {
    return this.list.length;
  }
  isEmpty() {
    return this.list.length === 0 ? true : false;
  }
  toString() {
    return this.list.join('');
  }
}
```

### 优先队列

```js
/**
 * 队列节点
 */
class QueueNode {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
  }
}
/**
 * 带有优先级的队列
 */
class PriorityQueue extends Queue {
  constructor() {
    super();
  }
  /**
   *
   * @param  val 值
   * @param {Number} priority 优先级(默认为0)
   */
  push(val, priority = 0) {
    if (!val) throw new Error('need a parameter');
    let newnode = new QueueNode(val, priority);
    let flag = false;
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].priority < priority) {
        this.list.splice(i, 0, newnode);
        flag = true;
        return;
      }
    }
    if (!flag) {
      this.list.push(newnode);
    }
  }
  toString() {
    let result = '';
    this.list.forEach((item) => {
      result += '{data:' + item.data + ',priority:' + item.priority + '}';
    });
    return result;
  }
}
```
