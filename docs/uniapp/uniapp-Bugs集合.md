---
title: uniapp-Bugs集合
date: 2021-01-12 19:41:15
permalink: /pages/a7f063/
categories:
  - uniapp
tags:
  - 
---

## 错误集合

::: details <span style='color:red'>TypeError: Cannot read property 'forceUpdate' of undefined</span>
<img style="margin-top:10px" :src="$withBase('/uniapp/uniapp-error01.jpg')" alt="暂无图片">

<vh2 title='解决方案:'></vh2>

```js
在项目的mainfest.json文件设置，AppID从微信公众平台获取
```

<img style="margin-top:10px" :src="$withBase('/uniapp/uniapp-resolve01.jpg')" alt="暂无图片">
<br>
:::

::: details <span style='color:red'>Module build failed (from ./node_modules/babel-loader/lib/index.js):</span>
<vh1 title='原因: babel版本冲突'></vh1>

<vh2 title='解决方案:'></vh2>
- <vh3 title='方案1: 升级babel版本'></vh3>

```js
npm install -D babel-loader @babel/core @babel/preset-env @babel/preset-react webpack
```

- <vh3 title='方案2: 降低babel版本'></vh3>

```js
npm install -D babel-loader@7 babel-core babel-preset-env webpack
```

<br>
:::

::: details <span style='color:red'>image或uni-list中的左侧缩略图,加载网络图片无法显示</span>

<vh2 title='解决方案:'></vh2>
<vh3 title='使用真机运行'></vh3>

<br>
:::