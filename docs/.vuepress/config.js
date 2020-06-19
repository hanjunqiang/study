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
  ],
  // base 设置为根目录文件名即可,即docs文件所在的文件名, 图片会用到这个base, 好像页面加载和这个base没有太大的关系
  //$withBase(/logo.jpg)会直接访问到study/docs/.vuepress/public/下
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
    nav: [
      { text: '主页', link: '/' },
      { text: '安卓', link: '/android/' }, // 外部链接
      // 下拉列表
      {
        text: '前端',
        items: [
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
      '/vue/': [
        {
          title: '目录:',
          children: [
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