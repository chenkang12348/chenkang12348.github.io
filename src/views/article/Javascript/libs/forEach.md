---
title: JS 如何终止 forEach 循环
theme: default
tag: Javascript
time: 2020.10.22
---

## JS 如何终止 forEach 循环

### JS 如何终止 forEach 循环 break 报错，return 跳不出循环

- 终止 forEach 可以使用 try catch 内部抛出错误，catch 捕获错误。

  ```JS
  let arr = [1, 2, 3]
  try {
    arr.forEach(item => {
      if (item === 2) {
        throw('循环终止')
      }
      console.log(item)
    })
  } catch(e) {
    console.log('e: ', e)
  }
  ```

### 当然我们大可以用其他方法代替

- Array.prototype.some

  当 return true 的时候，会终止遍历

- Array.prototype.every

  当 return false 的时候，会终止遍历
