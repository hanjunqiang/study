---
title: small-program学习资源
date: 2021-01-10 17:48:48
permalink: /pages/97a8f5/
categories:
  - small-program
tags:
  - 
---

<!-- 学习资源tags -->
<v-tags :tagsData=tagsData> </v-tags>

知识扩展
<hr>
- <b>一个邮箱只能注册一个小程序账号</b><br/>
- <b>一个小程序账号只能发布一个小程序</b><br/>
- <b>如果想要发布最新版本的会把之前的版本覆盖掉</b><br/>
- <b>发布了另一个小程序，也会把之前的小程序替换掉。</b><br/>
- <b>个人身份证号只能注册5个小程序(比如:5个邮箱绑定的同一个身份证号)</b><br/>
- <b>企业账户可以注册50个小程序</b><br/>


<script>
  export default {
    data() {
      return {
          tagsData:[
          {
            'key': '注册开发者账号',
            'value': 'https://mp.weixin.qq.com/cgi-bin/registermidpage?action=index&lang=zh_CN&token='
          },
          {
            'key': '小程序后台管理',
            'value': 'https://mp.weixin.qq.com/wxamp/home/guide?token=887422912&lang=zh_CN'
          },
          {
            'key': '开发文档',
            'value': 'https://developers.weixin.qq.com/miniprogram/dev/component/'
          },
          {
            'key': '视频教程',
            'value': 'https://www.bilibili.com/video/BV1KZ4y1T7QL?p=2'
          },
        ]
      }
    }
  }
</script>