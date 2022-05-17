---
title: LeetCode刷题日记之找出数组中重复数字
theme: default
tag: Javascript
time: 2021.1.11
---

## LeetCode 刷题日记之找出数组中重复数字

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1d3e0fe55ffd4b7abd6e439dfdfb3e4e~tplv-k3u1fbpfcp-zoom-1.image)
对于一段程序，用不同的方法写消耗时间差距还是很大的，下面是本题的逐渐改进过程。

### 遍历

```js
let nums = [0, 1, 2, 3, 4, 11, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let findRepeatNumber = function (nums) {
  let startIndex = 0;
  let result;
  while (startIndex < nums.length) {
    let start = nums[startIndex];
    for (let i = startIndex + 1; i < nums.length; i++) {
      if (start === nums[i]) {
        result = nums[i];
      }
    }
    startIndex++;
  }
  return result;
};
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/da60c91ac7034fe283656d7d144fade1~tplv-k3u1fbpfcp-zoom-1.image)

### 减少时间复杂度，用 set 减少遍历次数

```js
let findRepeatNumber = function (nums) {
  let result;
  let single = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (single.has(nums[i])) {
      return nums[i];
    } else {
      single.add(nums[i]);
    }
  }
  return result;
};
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/39185f7aaa334075957126ce3986c95e~tplv-k3u1fbpfcp-zoom-1.image)

### 先排序，再使用方法二

```js
let findRepeatNumber = function (nums) {
  let result;
  nums = nums.sort((a, b) => {
    return a - b;
  });
  let single = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (single.has(nums[i])) {
      return nums[i];
    } else {
      single.add(nums[i]);
    }
  }
  return result;
};
console.log(findRepeatNumber(nums));
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/12296120a0dd43fda9f8eabaa15a9ab8~tplv-k3u1fbpfcp-zoom-1.image)
