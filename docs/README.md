---
home: true
heroImage: /logo.jpg
# actionText: Home Page ! →
# actionLink: /office/
features:
- title: Truth One
  details: 己所不欲, 勿施于人.
- title: Truth Two
  details: 别太把自己当回事, 别太不把自己当回事.
- title: Truth Three
  details: 故天将降大任于是人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为，所以动心忍性，曾益其所不能。
---

Learning resource
<hr>
<!-- 学习资源tags -->
<v-tags :tagsData=tagsData> </v-tags>

To do list
<hr>
- <vh1 title='整理电脑中的文件夹,然后下载一个导出文件目录结构的软件,把目录结构放到blog中,方便快速找文件以及查看有什么文件'></vh1>




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