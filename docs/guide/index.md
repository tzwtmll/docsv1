---
permalink: /guide
---

# 指南

## 前端

### React

::: tip
[解析 react 原理](/frontend/react/core.md)
:::

### Vue

### redux

---

- [JS 应用的状态容器,提供可预测的状态管理](https://cn.vitejs.dev/)
- **redux** 的优点

  - 实现原理简单。

  - 可预料: Redux 让你开发出 行为稳定可预测、可运行在不同环境 （客户端、服务端和原生程序）、且 易于测试 的应用。

  - 集中管理: 集中管理应用的状态和逻辑可以让你开发出强大的功能，如 撤销/重做、 状态持久化 等等。

  - 可调式: Redux DevTools 让你轻松追踪到 应用的状态在何时、何处以及如何改变。Redux 的架构让你记下每一次改变，借助于 "时间旅行调试"，你甚至可以把完整的错误报告发送给服务器。

  - 灵活: Redux 可与任何 UI 层框架搭配使用，并且有 庞大的插件生态 来实现你的需求.

::: tip

- redux 和 react 是解耦关系,他们之间不存在相互依赖。
  :::

- **redux** 难点 - 新手难以上手,使用方法不清晰 - 在 react 中使用需要结合`react-redux`可以会导致逻辑混乱,初学者需要时间适应。

::: tip
[解析 redux 原理](/frontend/redux/index.md)
:::

### Interview

- 面试题

::: tip
[面试解析](/frontend/interview/index.md)
:::

## 后端

### nodejs

### nestjs

## 工程化

### vite

#### 为什么选 vite

- [下一代的前端工具链](https://cn.vitejs.dev/)

- 简单易上手

通过较短的时间即可上手,经过一段时间的发展，其生态逐步完善，
vite 社区慢慢发展壮大。
其优点具有打包速度快，拓展性强

- 全自动化

  开箱即用,减少了心智的负担，内置了 loader 的使用，减少了枯燥的概念,使工程化通俗易懂。

::: tip
[学习 vite 的使用](/engineering/vite/study/index.md)

[使用 vite 构建项目](/engineering/vite/index.md)
:::

---

### webpack

---

#### 为什么选 webpack

- [老牌劲旅,强大底蕴](https://www.webpackjs.com)

- 生态丰富，对于各种业务场景都是相应的解决方式

- 前端工程化开拓者与领导者，没有 webpack 就没有前端

- 难点

  需要有一定开发经验，有些概念复杂难懂，需要持续不断的学习,
  官方文档表达不明确。

::: tip
[学习 webpack](/engineering/webpack/index.md)
:::
