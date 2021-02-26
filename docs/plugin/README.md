---
title: 插件集合
date: 2021-01-15 10:28:45
permalink: /pages/c84038/
categories:
  - plugin
tags:
  - 
---

<v-tags :tagsData="tagsData"> </v-tags>


### tree-cli,间接安装tree,生成文件夹目录结构
::: details <span style='color:red'>tree用法</span>
[官网地址](https://www.npmjs.com/package/tree-cli)

<vh2 title='常用命令'></vh2>
```js
1, 安装
npm install -g tree-cli

2, 终端打印指定层级的文件目录(目前是2级)
tree -l 2

3, 终端打印 + 只展示文件夹
tree -l 2 -d

4, 终端打印 + 只展示文件夹 + 当前路径下生成文件目录文件
tree -l 2 -d -o out.txt

```

<br>
:::

### treer生成文件夹结构目录
::: details <span style='color:red'>treer生成文件夹结构目录</span>
<vh2 title='缺点'></vh2>
```js
1, 不能指定目录的输出层级
```

<vh2 title='1. 安装'></vh2>
```js
npm install treer -g
```

<vh2 title='2. 查看可执行命令,需执行:'></vh2>
```js
treer --help
```

```js
-h, --help             输出可执行命令信息 
-V, --version          输出版本号 
-d, --directory [dir]  指定一个目录,生成结构树 
-i, --ignore [ig]      忽略指定的文件目录名 
-e, --export [epath]   指定生成的目录结构的存放路径和格式 
```

<vh2 title='3. 实际使用操作'></vh2>
```js
//先cd进入指定文件夹,然后执行:
treer -e treer.txt -i "/.DS_Store|.git|node_module|.dat|.bundle|.png|.tmf/"
//过滤所有以.xxx结尾的文件
treer -e treer.txt -i "/\.[\u4E00-\u9FA5\w\d\-\_]+/"
1, 最后的双引号中, 必须要/开头,/结尾,中间不同的正则表达式用|分隔.
```

<br>
:::

<script>
  export default {
    data() {
      return {
          tagsData:[
            {
              'key': 'treer生成文件夹目录结构',
              'value': 'https://www.npmjs.com/package/treer'
            },
            {
              'key': 'tree-cli,间接安装tree,生成文件夹目录结构',
              'value': 'https://www.npmjs.com/package/tree-cli'
            },
          ]
      }
    }
  }
</script>








