const path = require('path')
module.exports = {
  publicPath: process.env.BASE_URL,
  outputDir: path.resolve(__dirname, "../../dist" + process.env.BASE_URL),

  pwa: {
    name: 'Otherapp',
    themeColor: '#e9ff00',
    msTileColor: '#e9ff00',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    manifestOptions: {
      name: 'Otherapp',
      short_name: 'Otherapp',
      background_color: '#e9ff00',
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
