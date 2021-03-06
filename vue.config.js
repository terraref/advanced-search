var webpack = require('webpack')
var path = require('path')

module.exports = {
  configureWebpack: () => {
    return {
      plugins: [
        new webpack.DefinePlugin({
          'APPLICATION_VERSION': JSON.stringify(require('./package.json').version),
        })
      ]
    }
  },

  lintOnSave: false,

  // pwa: {
  //   name: 'TERRA-REF Advanced Search',
  //   themeColor: '#0E718A',
  //   msTileColor: '#45B0C7',
  //   workboxPluginMode: 'InjectManifest',
  //   workboxOptions: {
  //     swSrc: path.join(__dirname, 'src', 'service-worker.js')
  //   }
  // },

  css: {
    loaderOptions: {
      sass: {
        data: `@import "~@/sass/main.sass"`,
      }
    }
  }
}
