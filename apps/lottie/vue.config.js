const path = require('path')
module.exports = {
  publicPath: process.env.BASE_URL,
  outputDir: path.resolve(__dirname, "../../dist" + process.env.BASE_URL),

  pwa: {
    name: 'Lottie',
    themeColor: '#9cd5ed',
    msTileColor: '#9cd5ed',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    manifestOptions: {
      name: 'Lottie',
      short_name: 'Lottie',
      background_color: '#9cd5ed',
      icons: [
        {
          "src": "./img/icons/android-chrome-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "./img/icons/android-chrome-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        }
      ]
    },

    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/mstile-150x150.png'
    }
  },

  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass')
      }
    }
  },

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: true
    }
  },

  transpileDependencies: [
    'quasar'
  ]
}
