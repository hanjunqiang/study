---
title: vue基础知识
date: 2020-06-26 14:06:27
permalink: /pages/035b78/
categories:
  - vue
tags:
  - 
---

## Vue的创建
一个简单的 Vue 实例只需要四步即可
::: details <span style='color:red'>创建vue实例</span>
<img style="margin-top:10px" :src="$withBase('/vue/vue创建.png')" alt="暂无图片">
<br>
:::

## String 字符串用法
## 字符串中是否包含searchValue, 第二个参数可以忽略,表示从第几位开始检查.
::: details <span style='color:red'>str.indexOf(searchValue [, fromIndex])</span>
```js
    var str = 'bcdefabalkj';
    console.log('返回结果:' + str.indexOf('a'));  //返回值为第一次检索到该字符的位置为5
    console.log('返回结果:' + str.indexOf('a',20));  //返回值为-1, 表示没有找到该字符
    // 当被搜索的值为''或undefined时,返回值:
    console.log('返回结果:' + str.indexOf('',11));  //0<fromIndex<=11时,返回值为fromIndex; fromIndex>11时,返回值都为11
    console.log('返回结果:' + str.indexOf('',20));  //返回值为11, 表示str的长度
    console.log('返回结果:' + str.indexOf(undefined,20));  //返回值为-1, 表示没有找到该字符
```
<br>
:::

## 字符串中替换字符
::: details <span style='color:red'>str.replace(regexp|substr, newSubStr|function)</span>
```js
    /* 
      使用正则表达式匹配字符串,可以替换所有的匹配结果.

      在 replace() 中使用 global 和 ignore 选项
      global:全局替换(g)
      ignore:忽略大小写(i)
    */
    var re = /apples/gi;
    var str = "Apples are round, and apples are juicy. I like apples.";
    var newstr = str.replace(re, "oranges");
    console.log(newstr);  //输出结果: oranges are round, and oranges are juicy. I like oranges.

    /* 使用字符串替换字符串,只会替换第一个匹配结果,且区分大小写 */
    var newstr2 = str.replace('apples', "oranges");
    console.log(newstr2); //输出结果: Apples are round, and oranges are juicy. I like apples.
```
<br>
:::

::: details <span style='color:red'>使用replace()交换两个单词的位置</span>
```js
    var re = /(\w+)-(\w+)/;  //表示匹配:  字母组合-字母组合
    var str = "John-Smith";
    /* 
      "$2, $1"是一个整体,作为第二个参数;
      第一个参数re会被第二个参数替换掉;
      第二个参数中$1表示a, $2表示b (原理可以理解: 字符串"a-b"会以特殊字符'-'拆分为2个参数$1,$2)
    */
    var newstr = str.replace(re, "$2, $1");  //第二个参数可以任意指定格式
    console.log(newstr); // Smith, John
```
<br>
:::

## 全局引入自定义组件
::: details <span style='color:red'>方式1: 在main.js中直接注册组件</span>
<img style="margin-top:10px" :src="$withBase('/vue/全局引入组件1.jpg')" alt="暂无图片">
<br>
:::

::: details <span style='color:red'>方式2(推荐): 创建独立的js文件并注册组件,然后在main.js中全局引用组件</span>
<img style="margin-top:10px" :src="$withBase('/vue/全局引入组件2.jpg')" alt="暂无图片">
<br>
:::

## .prevent和.passive区别
::: tip 重点摘要:
* ####  prevent 是拦截默认事件，passive是不拦截默认事件。<br>
* ####  passive和prevent冲突，不能同时绑定在一个监听器上。
[参考地址>](https://www.jianshu.com/p/f26e1864dd59)
:::

::: details 详解
* #### prevent: <br>
某些标签拥有自身的默认事件，如a[href="#"]，button[type="submit"] 这种标签在冒泡结束后会开始执行默认事件。注意默认事件虽然是冒泡后开始，但不会因为stop阻止事件传递而停止。<br>

* #### passive: <br>
明明默认执行为什么会设置这样一个修饰符?<br>
【浏览器只有等内核线程执行到事件监听器对应的JavaScript代码时，才能知道内部是否会调用preventDefault函数来阻止事件的默认行为，所以浏览器本身是没有办法对这种场景进行优化的。这种场景下，用户的手势事件无法快速产生，会导致页面无法快速执行滑动逻辑，从而让用户感觉到页面卡顿。】<br>

通俗点说就是每次事件产生，浏览器都会去查询一下是否有preventDefault阻止该次事件的默认动作。我们加上passive就是为了告诉浏览器，不用查询了，我们没用preventDefault阻止默认动作。

这里一般用在滚动监听，@scoll，@touchmove 。因为滚动监听过程中，移动每个像素都会产生一次事件，每次都使用内核线程查询prevent会使滑动卡顿。我们通过passive将内核线程查询跳过，可以大大提升滑动的流畅度。
:::

## 图片加载失败404的处理方式
> [参考地址](https://www.shuyong.net/chengxu/1089.html)

::: details 详解
```js
    <img class="img100" :src="item.photo" @error="onError(item)" />

    onError(item) {
      console.log('图片加载失败:');
      //方式1
      var img = event.srcElement;
      img.src = require('@/assets/image/newspage/zhanweitu@2x.png');
      img.error = null; //解绑error事件,避免图片出现抖动问题
    }
```
<br>
:::

## 路由跳转

::: tip 
```js
//A-B-C 从C-B返回时,B还能获取到query参数
this.$router.push({
    path: "longcontract",
    query: {
        id: code
    }
});
//下一页获取参数
this.$route.query.id;
```

```js
//A-B-C 从C-B返回时,B不能获取到params参数
this.$router.push({
    name: "longcontract",
    params: {
        id: code
    }
});
this.$route.params.id;
```
<br>
:::
