---
title: uniapp学习资源
date: 2021-01-10 14:57:10
permalink: /pages/813d9c/
categories:
  - uniapp
tags:
  - 
---

<!-- 学习资源tags -->
官方资源
<hr>
<v-tags :tagsData=tagsData> </v-tags>

插件资源
<hr>
<v-tags :tagsData=tagsData2> </v-tags>

知识扩展
<hr>
- <b>启动时, 必须先打开[pages文件夹]下的指定界面, 启动的就是当前打开的页面</b><br/>
- <b>自定义组件中的style标签,不要忘记添加scoped,防止全局样式重名的情况. </b><br/>
- <b>自定义组件名称"VTags"或"Vh1",组件使用时写为"v-tags"或"vh1";</b><br/>

::: details <span style='color:red'>nvue和vue有什么区别</span>
- <b>因为uni-app是逻辑和渲染分离的。渲染层，在app端提供了两套排版引擎：小程序方式的webview渲染，和weex方式的原生渲染。</b><br/>
- <b>在App端，如果使用vue页面，则使用webview渲染；如果使用nvue页面(native vue的缩写)，则使用原生渲染。</b><br/>

- <b>一个App中可以同时使用两种页面，比如首页使用nvue，二级页使用vue页面，hello uni-app示例就是如此。(应该不支持在一个页面中互相嵌套)</b><br/>
- <b>虽然nvue也可以多端编译，输出H5和小程序，但nvue的css写法受限，所以如果你不开发App，那么不需要使用nvue。</b><br>
以往的 weex ，有个很大的问题是它只是一个高性能的渲染器，没有足够的API能力（比如各种push sdk集成、蓝牙等能力调用），使得开发时非常依赖原生工程师协作，开发者本来想节约成本，结果需要前端、iOS、Android 3拨人开发，适得其反。 nvue 解决了这个问题，让前端工程师可以直接开发完整 App，并提供丰富的插件生态和云打包。这些组合方案，帮助开发者切实的提高效率、降低成本。

<b>同时uni-app扩展了weex原生渲染引擎的很多排版能力，修复了很多bug。比如</b>
- Android端良好支持边框阴影
- iOS端支持高斯模糊[详情](https://ask.dcloud.net.cn/article/36617#view),
- 可实现区域滚动长列表+左右拖动列表+吸顶的复杂排版效果
- 优化圆角边框绘制性能
<br>
:::

::: details <span style='color:red'>修改HBuilder快捷键之向下复制行</span>
<img style="margin-top:10px" :src="$withBase('/uniapp/修改快捷键.jpg')" alt="暂无图片">
<br>
:::

<script>
  export default {
    data() {
      return {
          tagsData:[
            {
              'key': '官网框架',
              'value': 'https://uniapp.dcloud.io/collocation/pages'
            },
            {
              'key': '视频教程',
              'value': 'https://space.bilibili.com/379063075?spm_id_from=333.788.b_765f7570696e666f.1'
            }
          ],
          tagsData2:[
            {
              'key': 'scss/sass编译(插件下载地址)',
              'value': 'https://ext.dcloud.net.cn/plugin?name=compile-node-sass'
            },
          ]
      }
    }
  }
</script>