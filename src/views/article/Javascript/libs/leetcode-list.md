---
title: LeetCode刷题日记之链表中倒数第k个节点
theme: default
tag: Javascript
time: 2021.1.21
---

## LeetCode 刷题日记之链表中倒数第 k 个节点

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6e98f46351f84451804105231059ed4b~tplv-k3u1fbpfcp-watermark.image)

解题思路：遍历出链表长度，设置一个计数点，当找到倒数第 K 个节点时返回，链表（感觉走了笨办法）

```js
var getKthFromEnd = function (head, k) {
  let conut = 1;
  let index = 1;
  let temp = head;
  while (temp && temp.next) {
    conut++;
    temp = temp.next;
  }
  while (head) {
    if (conut - k + 1 === index) {
      return head;
    }
    if (head.next) {
      index++;
      head = head.next;
    } else {
      head = null;
    }
  }
};
```

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/52936c070b394dc2b0c4059fad49f791~tplv-k3u1fbpfcp-watermark.image)
