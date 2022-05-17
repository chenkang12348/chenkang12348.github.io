---
title: Angular你不得不了解的入门小知识
theme: default
tag: Javascript
time: 2021.3.27
---

## Angular 你不得不了解的入门小知识

### highlight: androidstudio

**1. 一个 Angular 程序至少需要一个模块和一个组件。在我们新建项目的时候命令行已经默认生成出来了。**

- app.component.ts：这个文件表示组件
- 组件是 Angular 应用的基本构建模块，可以理解为一段带有业务逻辑和数据的 Html，vue 是 js，css，html 整合在一起，当然也可以分开，angular 是分开处理的

**2. - 组件相关概念：类似于 Vue**

- 组件元数据装饰器（@Component）
  简称组件装饰器，用来告知 Angular 框架如何处理一个 TypeScript 类.
  Component 装饰器包含多个属性，这些属性的值叫做元数据，Angular 会根据这些元数据的值来渲染组件并执行组件的逻辑

- 模板（Template）--> html

  我们可以通过组件自带的模板来定义组件的外观，模板以 html 的形式存在，告诉 Angular 如何来渲染组件，一般来 说，模板看起来很像 html，但是我们可以在模板中使用 Angular 的数据绑定语法，来呈现控制器中的数据。

- 控制器（controller）

  控制器就是一个普通的 typescript 类，他会被@Component 来装饰，控制器会包含组件所有的属性和方法，绝大多数的业务逻辑都是写在控制器里的。控制器通过数据绑定与模板来通讯，模板展现控制器的数据，控制器处理模板上发生的事件。

- 装饰器 ：模板和控制器是组件的必备要素。还有一些可选的元素，比如：
  输入属性（@inputs） 是用来接收外部传入的数据的,Angular 的程序结构就是一个组件树，输入属性允许在组件树 种传递数据
- 提供器（providers）： 这个是用来做依赖注入的
  生命周期钩子（LifeCycle Hooks）： 一个组件从创建到销毁的过程中会有多个钩子会被触发，类似于 Android 中的 Activity 的生命周期

- 样式表：组件可以关联一些样式表
  动画（Animations）： Angular 提供了一个动画包来帮助我们方便的创建一些跟组件相关的动画效果，比如淡入淡出等
- 输出属性（@Outputs）：

  用来定义一些其他组件可能需要的事件或者用来在组件之间共享数据

- app.module.ts 模块
  与 AppComponent 类似，模块也需要装饰器来装饰。

- Angular 常用命令

```shell
 ng new [name]

 ng serve --open

 // ng serve 命令会启动开发服务器、监视文件，并在这些文件发生更改时重建应用。

 // --open（或者只用 -o 缩写）选项会自动打开你的浏览器，并访问 http://localhost:4200/
```

- 模块
  将其组件和一组相关代码（如服务）关联起来

  ng generate module my-module-name

  简写 ng g m my-module-name

  配置 ng g m my-module-name-routing 创建带路由的模块

  ng g // 创建新的东西，如组件等
  ng g component // 创建新组件
  ng g component components/news // 新建 news 组件。
  ng g component components // 执行这两个命令后，如下图

- 服务
  对于与特定视图无关的，并且想跨组件共享的数据或逻辑，可以创建服务类。可作为依赖注入对象注入到使用的组建中
  数据绑定

  - 在模板上通过标记语言，数据传给对应的组件/指令，事件返回给使用者
  - [] 属性绑定
  - () 事件绑定
  - [()] 双向绑定
  - <input [ngModel]="data" (ngModuleChange)="myFunc($event)" [(ngModel)]='data1'>

  ng g m test1 // 创建一个 test1 的 module

  ng g m test2 --routing // 创建一个带路由的 module

  ng new my-project-name // 创建一个新项目

  ng build // 构建/编译应用

  ng test // 运行单元测试

  ng e2e // 运行端到端（end-to-end）测试

  ng serve // 启动一个小型 web 服务器，用于托管应用

  ng --help // 不懂的时候用这个查

  ng xxx --help // xxx 某个命令

```js
import { MessageComponent } from './message/message.component';
@NgModule({
  declarations: [
      MessageComponent
  ]
})
```

Angular 项目目录结构,看起来和 Vue 并没有什么区别的地方，大同小异。

```
node_modules        第三方依赖包存放目录
e2e                 端到端的测试目录  用来做自动测试的
src                 应用源代码目录
.angular-cli.json   Angular命令行工具的配置文件。后期可能会去修改它，引一些其他的第三方的包  比如jquery等
karma.conf.js  	    karma是单元测试的执行器，karma.conf.js是karma的配置文件
package.json        npm工具的配置文件，这个文件里面列出了该应用程序所使用的第三方依赖包。在新建项目的时候，等半天就是在下载第三方依赖包。下载完成后会放在node_modules这个目录中，后期我们可能会修改这个文件。
protractor.conf.js  也是一个做自动化测试的配置文件
README.md           说明文件
tslint.json         是tslint的配置文件，用来定义TypeScript代码质量检查的规则，不用管它
复制代码src 目录
app目录             包含应用的组件和模块，我们要写的代码都在这个目录
assets目录  	    资源目录，存储静态资源的  比如图片
environments目录    环境配置。Angular是支持多环境开发的，我们可以在不同的环境下（开发环境，测试环境，生产环境）共用一套代码，主要用来配置环境的
index.html          入口。整个应用的根html，程序启动就是访问这个页面
main.ts             整个项目的入口点，Angular通过这个文件来启动项目
polyfills.ts        主要是用来导入一些必要库，为了让Angular能正常运行在老版本下
styles.css          主要是放一些全局的样式
tsconfig.app.json   TypeScript编译器的配置,添加第三方依赖的时候会修改这个文件
tsconfig.spec.json  不用管
test.ts             也是自动化测试用的
typings.d.ts        不用管
```
