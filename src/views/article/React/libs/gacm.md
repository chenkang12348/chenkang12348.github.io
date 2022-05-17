---
title: 【gacm】傻瓜式git账号管理工具
theme: default
tag: Tool
time: 2022.4.26
---

## 【gacm】傻瓜式 git 账号管理工具

### 起因

最近多个项目老是需要切换 git 账号，git 命令都输入烦了，就想能不能像 nvm，或者 nrm 一样管理 git 账户，正好最近写了一个 node-cli 的模板，正好有用武之地，说干就干。

### 开始

![动画.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/05cf68ef26d34d28a3480043ac980f2c~tplv-k3u1fbpfcp-watermark.image?)

### 用法

just like nvm

```shell

gacm ls

gacm use xxx ---local

gacm use xxx ---global

gacm add --name xxx --email xxx

gacm delate user
```

### 功能需求

- 切换 git 账户（包含当前项目，全局用户，系统用户）
- 增加用户
- 删除用户
- 查看用户列表

### 获取 cli 模板

拉取一下我的模板工具[template-node-cli](https://github.com/alqmc/template-node-cli)

- 内置了基于 typescript+rollup+gulp 的打包工具
- 给出了一些简单模板

### 核心思路

- 通过 cli 执行 shell 命令

```shell
git config --xxx user.name xxxx
git config --xxx user.email xxxx
```

### 源码

- [github](https://github.com/alqmc/gacm)
- [gitee](https://gitee.com/Y_onghu/gacm)
