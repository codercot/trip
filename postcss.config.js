module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      selectorBlackList:["title"]//要忽略的选择器
    },
  },
};