<!--
 * @Author: pdd 483662261@qq.com
 * @Date: 2023-03-01 19:38:13
 * @LastEditors: pdd 483662261@qq.com
 * @LastEditTime: 2023-03-01 19:38:13
 * @FilePath: \vuepress-docs\docs\guide\home.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
[首页](../README.md)  
[配置参考](../reference/config.md)  
[快速上手](./getting-started.md)

<!-- 绝对路径 -->

[指南](/zh/guide/README.md)  
[配置参考 > markdown.links](/zh/reference/config.md#links)

<!-- URL -->

[GitHub](https://github.com)
<!-- 自定义容器 -->
<!-- ::: <type> [title]
[content]
::: -->

::: tip
  提示
:::
::: warning
这是一个警告
:::
::: danger
这是一个危险警告
:::
::: details
[首页](../README.md)  
:::

::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```ts
console.log('你好，VuePress！')
```
:::

<!-- 输入输出 -->
:::: code-group
::: code-group-item FOO
```ts
const foo = 'foo'
```
:::
::: code-group-item BAR
```ts
const bar = 'bar'
```
:::
::::

<!-- 文件目录 -->
```
├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
├─ .gitignore
└─ package.json
```
