---
title: README
date: 2020-06-26 17:00:44
permalink: /pages/b77669/
categories:
  - vuepress
tags:
  - 
---

<!-- 自动生成目录 -->


## VuePress相关资源
[参考1:](https://cloud.tencent.com/developer/article/1458494)

## 远程Blog访问地址
```js
//默认会找dist下的index.html
https://hanjunqiang.github.io/study/dist/
```

## 启动命令
```js
vuepress dev docs
```
## 构建命令
`该命令可以忽略,下面封装了打包和部署命令`
```js
vuepress build docs
```

## 打包和部署
`执行该命令可直接打包&部署到GitHub,是因为安装配置了前提条件中插件`
```js
cnpm run deploy:build;
```

<img style="margin-top:10px" :src="$withBase('/vuepress/01.jpg')" alt="暂无图片">

::: details 前提条件
<img style="margin-top:10px" :src="$withBase('/vuepress/01.jpg')" alt="暂无图片">
<br>
:::

内容<sup style="color:red;padding:0px 3px;margin-left:2px;border:1px solid red">[1](#锚点名)</sup>
<span id='锚点名'>11111111</span>

使用 Markdown[^注脚1]可以效率的书写文档, 直接转换成 HTML[^2], 你可以使用 Typora[^T] 编辑器进行书写。
 : Markdown是一种纯文本标记语言
[^2]: HyperText Markup Language 超文本标记语言
[^T]: NEW WAY TO READ & WRITE MARKDOWN.

这里有一个脚注[^脚注ID1](#脚注ID1)。

这里有一个脚注[^脚注ID2]。

@import "index.styl"

<font style="background: linear-gradient( to right, #ff1616, #ff7716);padding:10px">太阳太阳，给我们带来，七色光彩</font>
<p style="text-indent: 0;
    padding: 18px 21px;
    background-color: #f8fafc;
    border-radius: 8px;
    overflow: hidden;
    border-left: 8px solid #69f;
    color: #1c1f21;
    font-size: 1em;"> 
段落由一句或多句连续的文本组成，通过一个或多个空行分隔。（空行可能是没有任何内容的行、或者是只包含空行或制表符的行，多个空行也会显示成一个空行）。一个普通的段落不应该有空格或者制表符作为缩进。
</p>

<p class="font30">30号字体看看怎么样</p>


这是一个链接到谷歌的[^脚注]。

[^脚注]: 1212121

[^脚注ID1]: 此处是 **脚注** 的 *文本内容*。
[^脚注ID2]: 此处是 **脚注** 的 *文本内容*。
```html
[#脚注ID1]: 此处是 **脚注** 的 *文本内容*。
[#脚注ID2]: 此处是 **脚注** 的 *文本内容*。
#ss
```



<TOC :include-level="[1, 6]" />


# 一级
## 二级
### 三级
#### 四级
##### 五级
###### 六级


[[toc]] 
