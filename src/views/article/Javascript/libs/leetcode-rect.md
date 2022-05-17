---
title: LeetCode刷题日记之顺时针打印矩阵
theme: default
tag: Javascript
time: 2021.1.12
---

## LeetCode 刷题日记之顺时针打印矩阵

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/114a757fe3824f88a5a9ccd156478563~tplv-k3u1fbpfcp-zoom-1.image)![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ade6260330b640efbc1fd830d484fb9c~tplv-k3u1fbpfcp-zoom-1.image)
解题思路：把矩阵分为一个一个的圆环，顺时针遍历圆环即可（设置边界值，根据边界值，遍历圆环），只剩下一行，从左到右依次添加，只剩下一列时，从上到下依次添加。
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d65014d568f1437b968f47a14bc7dcb8~tplv-k3u1fbpfcp-zoom-1.image)

```js
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let spiralOrder = (matrix) => {
  if (matrix.length == 0) return [];
  let result = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  while (top < bottom && left < right) {
    for (let i = left; i < right; i++) result.push(matrix[top][i]);
    for (let i = top; i < bottom; i++) result.push(matrix[i][right]);
    for (let i = right; i > left; i--) result.push(matrix[bottom][i]);
    for (let i = bottom; i > top; i--) result.push(matrix[i][left]);
    right--;
    top++;
    bottom--;
    left++;
  }
  // 剩下一行，从左到右依次添加
  if (top == bottom) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
  } else if (left == right) {
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][left]);
    }
  }
  return result;
};
console.log(spiralOrder(matrix));
```
