---
title: React动画库
theme: default
tag: React
time: 2021.4.26
---

## React动画库

### 1 [Remotion](https://www.remotion.dev/)

Remotion，它是2021年初引入的一个令人兴奋的库，你可以使用它创建动画和视频。以下是其一些值得关注的功能：
允许你使用常见的网络技术（例如HTML，CSS，JavaScript，TypeScript等）创建动画。
不需要有关视频编辑的其他知识。
提供React功能，例如可重复使用的组件，强大的合成功能和快速重新加载功能。

- Remotion Player给你真正的视频编辑器的感觉。
- Remotion Player可用于使用浏览器播放和查看视频。
- Remotion在GitHub上有大约7K stars，最重要的是，它是免费供个人使用的。

使用Remotion之前，应先安装Node.js和FFmpeg。然后，你需要将FFmpeg提取到任何文件夹，并将其路径设置为系统变量。
安装完上述依赖项后，你可以通过运行yarn create video或创建第一个Remotion项目npm init video。

### 2 [Framer Motion](https://www.framer.com/)

Framer Motion是你应该关注的另一个流行的React动画库。它是两个API（Framer API和Motion API）的组合。

Framer库为Web和移动应用程序提供快速的交互性和原型设计功能，而Motion库提供动画和手势。

除此之外，还有很多理由对此感到兴奋：
为基于物理的高级动画提供帮助。

Motion API可以自动生成动画，你只需要配置正确的设置值即可。

- 支持手势识别喜欢hover，tap，pan，和drag。
- 支持服务器端渲染。
- 易于更改和操纵颜色。
- 好的文档，易于学习。
- 支持TypeScript。

你可以使用npm或yarn来安装Framer Motion

```shell
yarn add framer-motion
Or
npm install framer-motion

```

### 3 [React Motion](https://github.com/chenglou/react-motion#readme)

React Motion是另一个流行的React库，可让你轻松创建逼真的动画。主要是，它提供了五种不同的组件：spring， Motion，StaggeredMotion，TransitionMotion，和presets。他们每个人都有一个独特的目的：

- spring —辅助功能，用于指导零部件的动画制作。

- presets —预定义的动画对象。

- Motion —用于对组件进行动画处理的组件。

- StaggeredMotion —用于对动画相互依赖的组件进行动画处理的组件。

- TransitionMotion —用于对组件的安装和卸载进行动画处理的组件。

除了这五个专用的导出外，在使用React Motion之前，还需要研究许多内容，因为它比我们之前讨论过的其他库要复杂得多。他们提供了功能齐全的示例文件，我建议你首先阅读它们

如果要使用它，可以使用npm或yarn安装它：

```shell
yarn add react-motion
Or
npm i react-motion
```

### 4 [React-Spring](https://github.com/pmndrs/react-spring)

排在第四位的是react-spring，它是一个基于弹簧物理的动画库。它轻松满足了我们大多数与UI相关的现代动画需求。

而且，它具有高度的灵活性，并且继承了我们前面讨论过的React Motion的某些属性。因此，让我们看一下使React Spring如此特别的地方

- 提供了钩子来处理各种情况（useChain，useSpring， useSprings，useTrail，useTransition）。

- 能够应用动画而无需依赖React来逐帧渲染更新。

- Jest支持测试。

- 精心编写且对初学者友好的文档。

- 支持Web和React-native应用程序。

类似于本文中的所有其他库，你可以使用npm或yarn轻松安装react-spring：

```shell
yarn add react-spring
Or
npm install react-spring
```

### 5 [React Move](https://react-move-docs.netlify.app)

React Move是一个简单的库，可让你使用React创建数据驱动的动画。它可以用于实现各种动画和过渡。自定义推文功能是最突出的功能。

除此之外：

- 它支持React，React Native和React-VR。

- 它具有对延迟，持续时间和缓动的细粒度控制。

- 提供动画生命周期事件。

- 它支持TypeScript。

- 比React Motion更简单。

你可以使用npm轻松安装它：

```shell
npm install react-move
```
