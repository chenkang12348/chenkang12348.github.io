---
title: 手撕数据结构---栈
theme: default
tag: Javascript
time: 2020.10.23
---

## 手撕数据结构---栈

### 什么是栈

- 栈是一种后进先出的数据结构，也就是说最新添加的项最早被移出；它是一种运算受限的线性表，只能在表头/栈顶进行插入和删除操作。栈有栈底和栈顶。

```JS
class Stack {
    constructor() {
        this.list = [];
    }
    push(val) {
        return this.list.push(val);
    }
    getLength() {
        return this.list.length;
    }
    pop() {
        return this.list.pop();
    }
    peck() {
        return this.list[this.list.length - 1];
    }
    toString() {
        return this.list.join();
    }
    isEmpty() {
        if (this.list === 0) {
            return true;
        } else {
            return flase;
        }
    }
}
```

### 例题：括号匹配（成对出现）如：[]//true , [(}]//flase

```JS
// let str = "[[{}]]";
let str = "[)(]";
function check(str) {
    let arr = str.split(""); // 将传入字符串转化为数组
    let stack = new Stack(); // 新建栈
    let readString = "({[]})"; // 用来匹配的字符串
    let temp = [];
    let ruler = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (readString.indexOf(arr[i]) < 3) {
            let key =
                readString[readString.length - 1 - readString.indexOf(arr[i])];
            ruler.set(arr[i], key);
            stack.push(arr[i]);
        } else {
            temp.push(arr[i]);
        }
    }
    if (temp.length !== stack.getLength()) {
        return false;
    }
    for (let j = 0; j < temp.length; j++) {
        let target = stack.pop();
        if (!target) {
            return false;
        }
        target = ruler.get(target);
        console.log(target + ":" + temp[j]);
        if (target !== temp[j]) {
            return false;
        }
    }
    return true;
}
console.log(check(str));


```
