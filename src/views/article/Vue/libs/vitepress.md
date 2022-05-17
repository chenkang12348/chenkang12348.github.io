---
title: vitepress+github page 快速搭建个人博客
theme: default
tag: Vuejs
time: 2022.5.11
---

## vitepress+github page 快速搭建个人博客

### 初衷

呃呃呃，初衷就是两个字没钱 😀，哈哈哈，最近学生时期买的腾讯云服务过期了，没钱不想续费了，还有腾讯云比起阿里云的确还是有些差距（这两种服务器都用过。不是云玩家，虽然是学生机，便宜货），所以准备白嫖 github pages。花了两天不到时间就搞定了，虽然有些粗糙了 😀

预览地址：[@阿乐去买菜](alqmc.github.io)

### 实现

#### 主页部分

![阿乐去买菜](/articles/blog.jpg)

#### 文章部分

![阿乐去买菜](/articles/blog2.jpg)

#### 项目部分

![阿乐去买菜](/articles/blog1.jpg)

#### 个人部分

![阿乐去买菜](/articles/blog3.jpg)

### 技术选型

以前的老博客是 vue2+node 做的，感觉太麻烦了，这次就用了 vitepress 来做，也不需要后端了，不得不说体验咻咻的 😂

### 目录结构

```
- config 主要是一些配置信息
- docs 打包产物
- script 脚本工具，用来将 md 文件自动创建目录索引
- src
  - .vitepress vitepress 相关配置
  - components 公共组件
  - public 静态资源
  - type 类型文件
  - views md 文件
  - index.md 首页

```

### 源码

有兴趣的小伙伴可以自行克隆，做精细一点，也可以给个 star

- [github 地址](https://github.com/alqmc/alqmc.github.io)
