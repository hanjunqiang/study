---
home: true
heroImage: /logo.jpg
# actionText: Home Page ! →
# actionLink: /office/
features:
- title: 《论语》
  details: 己所不欲, 勿施于人。
- title: 《生活》
  details: 别太把自己当回事, 别太不把自己当回事。
- title: 林徽因
  details: 你若安好，便是晴天。
- title: 《清华园日记》
  details: 心里总觉得没事情做，其实事情多得很，只是不逼到时候，不肯下手而已。
- title: 《知乎》
  details: 如果你实在感觉她很忙，别追了，是人家没看上你而已。
- title: 《生于忧患，死于安乐》
  details: 故天将降大任于是人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为，所以动心忍性，曾益其所不能。
- title: 莫言
  details: 一个人，风尘仆仆地活在这个世界上，要为喜欢自己的人而活着。这才是最好的态度。不要在不喜欢你的人那里丢掉了快乐，然后又在喜欢自己的人这里忘记了快乐。
---

Learning resource
<hr>
<!-- 学习资源tags -->
<v-tags :tagsData=tagsData> </v-tags>

To do list
<hr>
- <vh1 title='整理电脑中的文件夹,然后下载一个导出文件目录结构的软件,把目录结构放到blog中,方便快速找文件以及查看有什么文件'></vh1>
<vh1 title='微信公众号文章'></vh1>
```js
https://weixin.sogou.com/
史上最强vue总结，万字长文
Vue知识总结来啦，你还不快来
一篇Vue最佳实践总结
实战总结 Vue 学习看这一篇就够了
Vue 2.0 学习总结，精华全在这里了
```

<script>
  export default {
    data() {
      return {
        tagsData:[
          {
            'key': '技术胖教程-图文版',
            'value': 'https://juejin.cn/post/6844904056939347976'
          }
        ],
        todoList:[
          {
            'key': '',
            'value': ''
          }
        ]
      }
    }
  }
</script>