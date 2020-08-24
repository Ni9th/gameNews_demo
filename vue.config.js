const path = require('path')

// const { set } = require('core-js/fn/dict')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/iview-admin/' : '/'

module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  productionSourceMap: false, // 打包时不生成.map文件，减少损耗
  devServer: {
    proxy: 'http://localhost:3000'
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 16, // 换算的基数
            selectorBlackList: [], // 忽略转换正则匹配项
            propList: ['*']
          })
        ]
      }
    }
  }
}
