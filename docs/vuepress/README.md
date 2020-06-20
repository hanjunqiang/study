# VuePress相关资源

## 远程Blog访问地址
```js
//默认会找dist下的index.html
https://hanjunqiang.github.io/study/dist/
```

## 注意点
```js
//本地服务的时候写为:
base: '/study/'
//部署后的base改为了:(因为需要用到打包文件内的index.html)
base: '/study/dist/'
```

## 启动命令
```js
vuepress dev docs
```

## 构建命令
```js
vuepress build docs
```



