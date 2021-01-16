---
title: vuepress学习资源
date: 2020-06-26 17:00:44
permalink: /pages/b77669/
categories:
  - vuepress
tags:
  - 
---

<!-- 学习资源tags -->
<v-tags :tagsData=tagsData> </v-tags>

## 注意事项
::: details 摘要
- 带html标签的内容必须要放在\```xxx 【内容】 ```中, 否则会导致整个页面加载不出来.
- 配置config.js新分类的时候(nav上的分类),必须要有个README.md文件,否则会报错无法展示页面.
- 不要复制.md文件,因为项目中的.md文件必须是唯一的,否则会导致页面加载不出来.
<br>
:::


<script>
  export default {
    data() {
      return {
          tagsData:[
          {
            'key':'官方-home、nav、sidebar配置',
            'value':'https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E6%B4%BB%E5%8A%A8%E7%9A%84%E6%A0%87%E9%A2%98%E9%93%BE%E6%8E%A5'
          },
          {
            'key':'官方-修改主题、组件样式',
            'value':'https://vuepress.vuejs.org/zh/config/#styling'
          },
          {
            'key':'vuepress-theme-vdoing',
            'value':'https://doc.xugaoyi.com/pages/793dcb/'
          },
        ]
      }
    }
  }
</script>