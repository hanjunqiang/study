const path= require('path');
const LoveMyPlugin = (options={}) => ({
  define () {
    // 这里COLOR好像只会初始化一次,所以最后决定在love-me.js中判断COLOR是否有值,没指定时随机颜色
    const COLOR = options.color
    const EXCLUDECLASS = options.excludeClassName || ''
    return {COLOR, EXCLUDECLASS}
  },
  enhanceAppFiles: [
    path.resolve(__dirname, 'love-me.js')
  ]
});
module.exports = LoveMyPlugin;
