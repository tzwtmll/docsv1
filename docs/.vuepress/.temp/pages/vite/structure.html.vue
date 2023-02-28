<template><div><!--
 * @Author: pdd 483662261@qq.com
 * @Date: 2023-02-28 17:56:23
 * @LastEditors: pdd 483662261@qq.com
 * @LastEditTime: 2023-02-28 17:56:26
 * @Description: 
-->
<hr>
<h2 id="permalink-vite-structure" tabindex="-1"><a class="header-anchor" href="#permalink-vite-structure" aria-hidden="true">#</a> permalink: /vite/structure</h2>
<h1 id="使用-vite-构建-react-框架" tabindex="-1"><a class="header-anchor" href="#使用-vite-构建-react-框架" aria-hidden="true">#</a> 使用 vite 构建 react 框架</h1>
<h2 id="初始化文件" tabindex="-1"><a class="header-anchor" href="#初始化文件" aria-hidden="true">#</a> 初始化文件</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> init <span class="token parameter variable">-y</span>
<span class="token function">npm</span> i vite <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h3>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code>├─ config
│  ├─ vite.config.base.js
│  ├─ vite.config.dev.js
│  ├─ vite.config.mock.js
│  └─ vite.config.prod.js
├─ mock
│  ├─ index.ts
│  └─ mockProdServer.ts
├─ src
│  ├─ asset
│  │  └─ global.less
│  ├─ App.tsx
│  ├─ main.tsx
│  ├─ vite-env-d.ts
│  └─ theme
│     └─ var.less
├─ .eslintrc.js
├─ .prettierrc.js
├─ .gitignore
├─ .stylelint.js
├─ index.html
├─ package.json
├─ tsconfig.json
├─ vite.config.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置-eslintrc-js" tabindex="-1"><a class="header-anchor" href="#配置-eslintrc-js" aria-hidden="true">#</a> 配置 .eslintrc.js</h2>
<h3 id="安装包" tabindex="-1"><a class="header-anchor" href="#安装包" aria-hidden="true">#</a> 安装包</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i eslint --save-dev
<span class="token function">npm</span> i eslint-plugin-import --save-dev
<span class="token function">npm</span> i eslint-config-prettier --save-dev
<span class="token function">npm</span> i eslint-plugin-import --save-dev
<span class="token function">npm</span> i eslint-plugin-jsx-a11y --save-dev
<span class="token function">npm</span> i eslint-plugin-react --save-dev
<span class="token function">npm</span> i eslint-plugin-simple-import-sort --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件配置" tabindex="-1"><a class="header-anchor" href="#文件配置" aria-hidden="true">#</a> 文件配置</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .eslintrc.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">'@typescript-eslint/parser'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token number">2020</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">'module'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ecmaFeatures</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">jsx</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">settings</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">react</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token string">'detect'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">'import/resolver'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">paths</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'src'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'.js'</span><span class="token punctuation">,</span> <span class="token string">'.jsx'</span><span class="token punctuation">,</span> <span class="token string">'.ts'</span><span class="token punctuation">,</span> <span class="token string">'.tsx'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">amd</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">'eslint:recommended'</span><span class="token punctuation">,</span>
    <span class="token string">'plugin:@typescript-eslint/recommended'</span><span class="token punctuation">,</span>
    <span class="token string">'plugin:react/recommended'</span><span class="token punctuation">,</span>
    <span class="token string">'plugin:jsx-a11y/recommended'</span><span class="token punctuation">,</span>
    <span class="token string">'plugin:prettier/recommended'</span><span class="token punctuation">,</span> <span class="token comment">// Make sure this is always the last element in the array.</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'simple-import-sort'</span><span class="token punctuation">,</span> <span class="token string">'jsx-a11y'</span><span class="token punctuation">,</span> <span class="token string">'prettier'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'prettier/prettier'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">usePrettierrc</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">'react/react-in-jsx-scope'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'jsx-a11y/accessible-emoji'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'react/prop-types'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'@typescript-eslint/explicit-function-return-type'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'simple-import-sort/imports'</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">//导入顺序</span>
    <span class="token string-property property">'simple-import-sort/exports'</span><span class="token operator">:</span> <span class="token string">'error'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'jsx-a11y/anchor-is-valid'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">//是否必须标签化</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Link'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">specialLink</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'hrefLeft'</span><span class="token punctuation">,</span> <span class="token string">'hrefRight'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">aspects</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'invalidHref'</span><span class="token punctuation">,</span> <span class="token string">'preferButton'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">'jsx-a11y/click-events-have-key-events'</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 点击添加键盘监听</span>
    <span class="token string-property property">'jsx-a11y/no-static-element-interactions'</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// a 标签添加关联</span>
    <span class="token comment">// 'jsx-a11y/rule-name': 1,</span>
    <span class="token string-property property">'no-unused-vars'</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string-property property">'no-var'</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string-property property">'@typescript-eslint/no-explicit-any'</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 是否可以使用 any</span>
    <span class="token string-property property">'prefer-const'</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 是否使用const</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置-prettierrc-js" tabindex="-1"><a class="header-anchor" href="#配置-prettierrc-js" aria-hidden="true">#</a> 配置 .prettierrc.js</h2>
<h3 id="文件配置-1" tabindex="-1"><a class="header-anchor" href="#文件配置-1" aria-hidden="true">#</a> 文件配置</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .prettierrc.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 一行的字符数，如果超过会进行换行，默认为80</span>
  <span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
  <span class="token comment">// 一个tab代表几个空格数，默认为80</span>
  <span class="token literal-property property">tabWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token comment">// 是否使用tab进行缩进，默认为false，表示用空格进行缩减</span>
  <span class="token literal-property property">useTabs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 字符串是否使用单引号，默认为false，使用双引号</span>
  <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 行位是否使用分号，默认为true</span>
  <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 是否使用尾逗号，有三个可选值"&lt;none|es5|all>"</span>
  <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">'none'</span><span class="token punctuation">,</span>
  <span class="token comment">// 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }</span>
  <span class="token literal-property property">bracketSpacing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 默认格式化工具选择prettier</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ul>
<li>如果配置未生效，首先尝试重启 vscode。如果依然不成功</li>
<li>打开设置&gt;setting.json&gt;
{
&quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;,
}</li>
</ul>
</div>
<h2 id="配置-stylelintrc-js" tabindex="-1"><a class="header-anchor" href="#配置-stylelintrc-js" aria-hidden="true">#</a> 配置 .stylelintrc.js</h2>
<h3 id="安装包-1" tabindex="-1"><a class="header-anchor" href="#安装包-1" aria-hidden="true">#</a> 安装包</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i stylelint --save-dev
<span class="token function">npm</span> i stylelint-config-standard --save-dev
<span class="token function">npm</span> i stylelint-config-recess-order --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .stylelintrc.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">'stylelint-config-standard'</span><span class="token punctuation">,</span> <span class="token comment">// 配置stylelint拓展插件</span>
    <span class="token string">'stylelint-config-recess-order'</span><span class="token punctuation">,</span> <span class="token comment">// 配置stylelint css属性书写顺序插件,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">indentation</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// 指定缩进空格</span>
    <span class="token string-property property">'no-descending-specificity'</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器</span>
    <span class="token string-property property">'function-url-quotes'</span><span class="token operator">:</span> <span class="token string">'always'</span><span class="token punctuation">,</span> <span class="token comment">// 要求或禁止 URL 的引号 "always(必须加上引号)"|"never(没有引号)"</span>
    <span class="token string-property property">'string-quotes'</span><span class="token operator">:</span> <span class="token string">'double'</span><span class="token punctuation">,</span> <span class="token comment">// 指定字符串使用单引号或双引号</span>
    <span class="token string-property property">'unit-case'</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// 指定单位的大小写 "lower(全小写)"|"upper(全大写)"</span>
    <span class="token string-property property">'color-hex-case'</span><span class="token operator">:</span> <span class="token string">'lower'</span><span class="token punctuation">,</span> <span class="token comment">// 指定 16 进制颜色的大小写 "lower(全小写)"|"upper(全大写)"</span>
    <span class="token string-property property">'color-hex-length'</span><span class="token operator">:</span> <span class="token string">'long'</span><span class="token punctuation">,</span> <span class="token comment">// 指定 16 进制颜色的简写或扩写 "short(16进制简写)"|"long(16进制扩写)"</span>
    <span class="token string-property property">'rule-empty-line-before'</span><span class="token operator">:</span> <span class="token string">'never'</span><span class="token punctuation">,</span> <span class="token comment">// 要求或禁止在规则之前的空行 "always(规则之前必须始终有一个空行)"|"never(规则前绝不能有空行)"|"always-multi-line(多行规则之前必须始终有一个空行)"|"never-multi-line(多行规则之前绝不能有空行。)"</span>
    <span class="token string-property property">'font-family-no-missing-generic-family-keyword'</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// 禁止在字体族名称列表中缺少通用字体族关键字</span>
    <span class="token string-property property">'block-opening-brace-space-before'</span><span class="token operator">:</span> <span class="token string">'always'</span><span class="token punctuation">,</span> <span class="token comment">// 要求在块的开大括号之前必须有一个空格或不能有空白符 "always(大括号前必须始终有一个空格)"|"never(左大括号之前绝不能有空格)"|"always-single-line(在单行块中的左大括号之前必须始终有一个空格)"|"never-single-line(在单行块中的左大括号之前绝不能有空格)"|"always-multi-line(在多行块中，左大括号之前必须始终有一个空格)"|"never-multi-line(多行块中的左大括号之前绝不能有空格)"</span>
    <span class="token string-property property">'property-no-unknown'</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// 禁止未知的属性(true 为不允许)</span>
    <span class="token string-property property">'no-empty-source'</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// 禁止空源码</span>
    <span class="token string-property property">'declaration-block-trailing-semicolon'</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// 要求或不允许在声明块中使用尾随分号 string："always(必须始终有一个尾随分号)"|"never(不得有尾随分号)"</span>
    <span class="token string-property property">'selector-class-pattern'</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// 强制选择器类名的格式</span>
    <span class="token string-property property">'value-no-vendor-prefix'</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// 关闭 vendor-prefix(为了解决多行省略 -webkit-box)</span>
    <span class="token string-property property">'at-rule-no-unknown'</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string-property property">'selector-pseudo-class-no-unknown'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">ignorePseudoClasses</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'global'</span><span class="token punctuation">,</span> <span class="token string">'v-deep'</span><span class="token punctuation">,</span> <span class="token string">'deep'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 配置package.json文件</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"lint:fix"</span><span class="token operator">:</span> <span class="token string">"eslint --ext .js,.jsx,.ts,.tsx --fix ./src"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"lint:style"</span><span class="token operator">:</span> <span class="token string">"stylelint --fix \"**/*.(less|css)\" "</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="配置-vite-环境文件" tabindex="-1"><a class="header-anchor" href="#配置-vite-环境文件" aria-hidden="true">#</a> 配置 vite 环境文件</h2>
<h3 id="vite-config-js" tabindex="-1"><a class="header-anchor" href="#vite-config-js" aria-hidden="true">#</a> vite.config.js</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// defineConfig 字段提示</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> viteBase <span class="token keyword">from</span> <span class="token string">'./config/vite.config.base'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> viteDev <span class="token keyword">from</span> <span class="token string">'./config/vite.config.dev'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> viteMock <span class="token keyword">from</span> <span class="token string">'./config/vite.config.mock'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> viteProd <span class="token keyword">from</span> <span class="token string">'./config/vite.config.prod'</span><span class="token punctuation">;</span>

<span class="token comment">// 通过 mode 区分环境 --mode env 指定环境，需要返回函数</span>
<span class="token keyword">const</span> configEnv <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">development</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>viteBase<span class="token punctuation">,</span> viteDev<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function-variable function">production</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>viteBase<span class="token punctuation">,</span> viteProd<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function-variable function">mock</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>viteBase<span class="token punctuation">,</span> viteMock<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> mode <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> configEnv<span class="token punctuation">[</span>mode<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vite-config-base-js" tabindex="-1"><a class="header-anchor" href="#vite-config-base-js" aria-hidden="true">#</a> vite.config.base.js</h3>
<h4 id="安装公共环境包" tabindex="-1"><a class="header-anchor" href="#安装公共环境包" aria-hidden="true">#</a> 安装公共环境包</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>// react编译
<span class="token function">npm</span> i @vitejs/plugin-react <span class="token parameter variable">-D</span>
// ts浏览器检索
<span class="token function">npm</span> i vite-plugin-checker <span class="token parameter variable">-D</span>
// gzip压缩
<span class="token function">npm</span> i vite-plugin-compression <span class="token parameter variable">-D</span>
// 压缩可视化
<span class="token function">npm</span> i vite-plugin-progress <span class="token parameter variable">-D</span>
// 样式按需导入
<span class="token function">npm</span> i vite-plugin-style-import <span class="token parameter variable">-D</span>
// ts路径映射
<span class="token function">npm</span> i vite-tsconfig-paths <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="公共环境配置" tabindex="-1"><a class="header-anchor" href="#公共环境配置" aria-hidden="true">#</a> 公共环境配置</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// config/vite.config.base.js</span>
<span class="token keyword">import</span> react <span class="token keyword">from</span> <span class="token string">'@vitejs/plugin-react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'path'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> checker <span class="token keyword">from</span> <span class="token string">'vite-plugin-checker'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> viteCompression <span class="token keyword">from</span> <span class="token string">'vite-plugin-compression'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> progress <span class="token keyword">from</span> <span class="token string">'vite-plugin-progress'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStyleImportPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite-plugin-style-import'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> tsconfigPaths <span class="token keyword">from</span> <span class="token string">'vite-tsconfig-paths'</span><span class="token punctuation">;</span>
<span class="token comment">// 相对路径转绝对路径，因为是node环境，可能文件执行位置发送改变</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">resolvePath</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">_path</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> _path<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// antd按需导入</span>
<span class="token keyword">function</span> <span class="token function">AntdLibImport</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">libraryName</span><span class="token operator">:</span> <span class="token string">'antd'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">esModule</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function-variable function">resolveStyle</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">antd/es/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/style/index</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">react</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">progress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">checker</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">typescript</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">tsconfigPaths</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">createStyleImportPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">libs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">AntdLibImport</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">viteCompression</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">verbose</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">disable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">10240</span><span class="token punctuation">,</span>
      <span class="token literal-property property">algorithm</span><span class="token operator">:</span> <span class="token string">'gzip'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">ext</span><span class="token operator">:</span> <span class="token string">'.gz'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 别名配置 tsconfig.json文件中还需要配置</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'@'</span><span class="token operator">:</span> <span class="token function">resolvePath</span><span class="token punctuation">(</span><span class="token string">'../src'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token string-property property">'~'</span><span class="token operator">:</span> <span class="token function">resolvePath</span><span class="token punctuation">(</span><span class="token string">'../node_modules'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 接收模块后缀</span>
    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">'.mjs'</span><span class="token punctuation">,</span>
      <span class="token string">'.js'</span><span class="token punctuation">,</span>
      <span class="token string">'.ts'</span><span class="token punctuation">,</span>
      <span class="token string">'.jsx'</span><span class="token punctuation">,</span>
      <span class="token string">'.tsx'</span><span class="token punctuation">,</span>
      <span class="token string">'.json'</span><span class="token punctuation">,</span>
      <span class="token string">'.less'</span><span class="token punctuation">,</span>
      <span class="token string">'.svg'</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">define</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token constant">MENU_PATH</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">"path"</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">preprocessorOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">less</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">javascriptEnabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">charset</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">math</span><span class="token operator">:</span> <span class="token string">'always'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">devSourcemap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//定位到源文件中</span>
        <span class="token comment">// 全局导入</span>
        <span class="token literal-property property">additionalData</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">@import "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">resolvePath</span><span class="token punctuation">(</span><span class="token string">'../src/theme/var.less'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">";</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 别名配置在ts环境中还需要再 tsconfig.json中进行配置</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">compilerOptions</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token string-property property">"baseUrl"</span><span class="token operator">:</span> <span class="token string">"."</span><span class="token punctuation">,</span>
    <span class="token string-property property">"paths"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"@/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"src/*"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"~/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"node_module/*"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vite-config-dev-js" tabindex="-1"><a class="header-anchor" href="#vite-config-dev-js" aria-hidden="true">#</a> vite.config.dev.js</h3>
<h4 id="安装开发环境包" tabindex="-1"><a class="header-anchor" href="#安装开发环境包" aria-hidden="true">#</a> 安装开发环境包</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>// html模板
<span class="token function">npm</span> i createHtmlPlugin <span class="token parameter variable">-D</span>
// 动态路由
<span class="token function">npm</span> i vite-plugin-react-router-generator <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><a href="/vite/plugin/router">动态路由的使用</a></p>
</div>
<h4 id="文件配置-2" tabindex="-1"><a class="header-anchor" href="#文件配置-2" aria-hidden="true">#</a> 文件配置</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createHtmlPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite-plugin-html'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactRouterGenerator <span class="token keyword">from</span> <span class="token string">'vite-plugin-react-router-generator'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> resolvePath <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./vite.config.base'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'development'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">ReactRouterGenerator</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">outputFile</span><span class="token operator">:</span> <span class="token function">resolvePath</span><span class="token punctuation">(</span><span class="token string">'../src/router/auto.js'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">isLazy</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">comKey</span><span class="token operator">:</span> <span class="token string">'components'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">createHtmlPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 导入到 html 中的变量</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'/api'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'localhost:3000'</span><span class="token punctuation">,</span> <span class="token comment">//代理地址</span>
        <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">_path</span><span class="token punctuation">)</span> <span class="token operator">=></span> _path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">'/onLine'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 选择替换api</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- 生产环境 -->
<h3 id="vite-config-prod-js" tabindex="-1"><a class="header-anchor" href="#vite-config-prod-js" aria-hidden="true">#</a> vite.config.prod.js</h3>
<h4 id="安装生产环境包" tabindex="-1"><a class="header-anchor" href="#安装生产环境包" aria-hidden="true">#</a> 安装生产环境包</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>// <span class="token builtin class-name">hash</span>
<span class="token function">npm</span> i hash.js <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="文件配置-3" tabindex="-1"><a class="header-anchor" href="#文件配置-3" aria-hidden="true">#</a> 文件配置</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> createHash <span class="token keyword">from</span> <span class="token string">'hash.js'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig<span class="token punctuation">,</span> version <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> resolvePath <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./vite.config.base'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'production'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rollupOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token function">resolvePath</span><span class="token punctuation">(</span><span class="token string">'../index.html'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token function">resolvePath</span><span class="token punctuation">(</span><span class="token string">'../src/main.tsx'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 静态资源</span>
        <span class="token function-variable function">assetFileNames</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">assetInfo</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">let</span> extType <span class="token operator">=</span> assetInfo<span class="token operator">?.</span>name<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'.'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token string">''</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">png|jpe?g|svg|gif|tiff|bmp|ico</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>extType<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            extType <span class="token operator">=</span> <span class="token string">'img'</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">static/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>extType<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/[name]-[hash][extname]</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 入口文件</span>
        <span class="token function-variable function">entryFileNames</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">chunk</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>chunk<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">'app'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">static/js/[name].</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>version<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.js</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">static/js/[name].js</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// chunk</span>
        <span class="token function-variable function">chunkFileNames</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">chunkInfo</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> hash <span class="token operator">=</span> createHash
            <span class="token punctuation">.</span><span class="token function">sha256</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>chunkInfo<span class="token punctuation">.</span>moduleIds<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token string">'hex'</span><span class="token punctuation">)</span>
            <span class="token comment">// 取5位</span>
            <span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">static/js/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>hash<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.chunk.js</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vite-config-mock-js" tabindex="-1"><a class="header-anchor" href="#vite-config-mock-js" aria-hidden="true">#</a> vite.config.mock.js</h3>
<h4 id="安装-mock-环境包" tabindex="-1"><a class="header-anchor" href="#安装-mock-环境包" aria-hidden="true">#</a> 安装 mock 环境包</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i vite-plugin-mock <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> viteMockServe <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite-plugin-mock'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'mock'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">viteMockServe</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">mockPath</span><span class="token operator">:</span> <span class="token string">'mock'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token string">'9000'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'/api'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">_path</span><span class="token punctuation">)</span> <span class="token operator">=></span> _path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">'/mock'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><a href="/vite/plugin/mock">配置 mock 环境</a></p>
</div>
<h2 id="package-json-文件" tabindex="-1"><a class="header-anchor" href="#package-json-文件" aria-hidden="true">#</a> package.json 文件</h2>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"npm run dev "</span><span class="token punctuation">,</span>
    <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"vite"</span><span class="token punctuation">,</span>
    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"tsc &amp;&amp; vite build"</span><span class="token punctuation">,</span>
    <span class="token property">"mock"</span><span class="token operator">:</span> <span class="token string">"vite --mode mock"</span><span class="token punctuation">,</span>
    <span class="token property">"preview"</span><span class="token operator">:</span> <span class="token string">"vite preview --port 10001"</span><span class="token punctuation">,</span>
    <span class="token property">"lint:fix"</span><span class="token operator">:</span> <span class="token string">"eslint --ext .js,.jsx,.ts,.tsx --fix ./src"</span><span class="token punctuation">,</span>
    <span class="token property">"lint:style"</span><span class="token operator">:</span> <span class="token string">"stylelint --fix \"**/*.(less|css)\" "</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react-项目创建" tabindex="-1"><a class="header-anchor" href="#react-项目创建" aria-hidden="true">#</a> react 项目创建</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>├─ src
│  ├─ App.tsx
│  ├─ main.tsx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="app-tsx" tabindex="-1"><a class="header-anchor" href="#app-tsx" aria-hidden="true">#</a> App.tsx</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>app<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="main-tsx" tabindex="-1"><a class="header-anchor" href="#main-tsx" aria-hidden="true">#</a> main.tsx</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'@/assets/css/global.less'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createRoot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-dom/client'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="index-html" tabindex="-1"><a class="header-anchor" href="#index-html" aria-hidden="true">#</a> index.html</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>pdd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./src/main.tsx<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


