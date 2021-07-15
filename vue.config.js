module.exports = {
  assetsDir: 'static',
  configureWebpack:{
    resolve:{
      alias:{
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
        'network': '@/network',
      }
    }
  }
}