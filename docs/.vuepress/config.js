// module.exports = {
//   title: 'Hello VuePress',
//   description: 'Just playing around'
// }
module.exports = {
  title: "Mrhan's Blog",
  description: '现在不一定是最糟糕的,消极只会更糟糕!',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
      // 移动栏优化
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],

/* ----------------------------------------------------------------------------------------------
                                             这里是鼠标选中
  ----------------------------------------------------------------------------------------------*/
    // 引入jquery
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
    }],
    // 引入鼠标点击脚本
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/js/MouseClickEffect.js"
    }]
  ],

  // theme: 'vdoing',

  /* ----------------------------------------------------------------------------------------------
                                             插件
  ----------------------------------------------------------------------------------------------*/
  plugins:[
    // 代码复制弹窗插件
    ['one-click-copy', {
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: 'copy💗成功!', // default is 'Copy successfully and then paste it for use.'
      duration: 500, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],
    // 背景有个彩带(可能被内容遮盖住)
    [
      "ribbon",
      {
        size: 90,     // width of the ribbon, default: 90
        opacity: 0.8, // opacity of the ribbon, default: 0.3
        zIndex: -1    // z-index property of the background, default: -1
      }
    ],
    ['go-top'],
    // 音乐插件
    ['meting', {
      //metingApi: "https://meting.sigure.xyz/api/music",
      meting: {
        // 网易
        server: "netease",
        // 读取歌单
        type: "playlist",
        mid: "696441716",
      },          
      // 不配置该项的话不会出现全局播放器
      aplayer: {
        // 吸底模式
        fixed: true,
        mini: true,
        // 自动播放
        autoplay: false,
        // 歌曲栏折叠
        listFolded:true,
        // 颜色
        theme: '#f9bcdd',
        // 播放顺序为随机
        order: 'random',
        // 初始音量
        volume: 0.1,
        // 关闭歌词显示
        lrcType: 0
      },
      mobile :{
        // 手机端去掉cover图
        cover: false,
      }
    }]
  ],



  // base 设置为根目录文件名即可,即docs文件所在的文件名, 图片会用到这个base, 好像页面加载和这个base没有太大的关系
  //$withBase(/logo.jpg)会直接访问到study/docs/.vuepress/public/下
  //buguo '/study/dist/'
  base: '/study/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  dest: './dist',
 
  // themeConfig: {
  //   sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
  //   lastUpdated: 'Last Updated' // 文档更新时间：每个文件git最后提交的时间
  // }
  themeConfig: {
    //algolia需要添加配置,比较麻烦,暂时不弄了,这里是参考地址:
    //https://www.vuepress.cn/theme/default-theme-config.html#algolia-%E6%90%9C%E7%B4%A2
    //https://www.cnblogs.com/tmlh/p/10452235.html
    //https://www.algolia.com/apps/4YBM9CM6GB/api-keys/all
    // algolia: {
    //   apiKey: 'a34ca8a23010dc679f1f892a87962ad7',
    //   indexName: 'blog'
    // },
    nav: [
      { text: '主页', link: '/' },
      { text: '安卓', link: '/android/' }, // 外部链接
      // 下拉列表
      {
        text: '前端',
        link: '/web/',
        items: [
          { text: 'css', link: '/css/' },
          { text: 'vue', link: '/vue/' },
          { text: 'vant', link: '/vant/' },
        ]
      },
      {
        text: 'iOS',
        items: [
          { text: 'iOS', link: '/ios/' },
          { text: 'OC', link: '/oc/' },
          {
            text: 'Swift',
            link: '/swift/'
          }
        ]
      },
      {
        text: 'weex',
        items: [
          { text: 'weex', link: '/weex/' },
        ]
      },
      { text: 'Vuepress', link: '/vuepress/' }, // 外部链接    
      { text: 'Github', link: 'https://github.com' }, // 外部链接    
    ],

    /* 
      nav中的link地址,比如/vue/目录下,必须要有个README文件,不然会报错400或404
      sidebar只是添加侧边栏,
    */
    sidebar: {
      '/web/': ['/'],
      '/vant/': [
        {
          title: '目录:',
          children: [
            {
              title:'Bug集合',
              children: [
                '/vant/01',
              ]
            },
          ]
        },
      ],
      '/css/': [
        {
          title: '目录:',
          children: [
            {
              title:'CSS',
              children: [
                '/css/01',
              ]
            }
          ]
        },
      ],
      '/vue/': [
        {
          title: '目录:',
          children: [
            {
              title:'新项目-配置',
              children: [
                '/vue/',
              ]
            },
            {
              title:'修饰符',
              children: [
                '/vue/01',
              ]
            },
            {
              title:'常见问题',
              children: [
                '/vue/02',
              ]
            },
          ]
        },
      ],
      '/vuepress/': [
        {
          title: '目录:',
          children: [
            {
              title:'相关资源',
              children: [
                '/vuepress/01',
              ]
            }
          ]
        },
      ],
      '/weex/': [
        {
          title: '目录:',
          children: [
            {
              title:'科蓝平台',
              children: [
                '/weex/01',
              ]
            }
          ]
        },
      ],
      '/ios/': [
        {
          title: '目录:',
          children: [
            {
              title:'启动图',
              children: [
                '/ios/01',
              ]
            },
            {
              title:'宏定义',
              children: [
                '/ios/02',
              ]
            },
            {
              title:'Bug集合',
              children: [
                '/ios/03',
              ]
            },
          ]
        },
      ],
    }
  }
};

