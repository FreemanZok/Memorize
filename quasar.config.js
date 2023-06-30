const { configure } = require('quasar/wrappers');

module.exports = configure(function (ctx) {
  return {
    supportTS: false,

    boot: [
      'i18n',
      'axios',
      'testStore'
    ],
    css: [
      'app.scss'
    ],
    extras: [
      'roboto-font', // optional, you are not bound to it
      'material-icons', // optional, you are not bound to it
    ],
    build: {
      vueRouterMode: 'hash', // available values: 'hash', 'history'
      chainWebpack(/* chain */) { }

    },
    devServer: {
      server: {
        type: 'http'
      },
      port: 8080,
      open: true // opens browser window automatically
    },
    framework: {
      config: {},
      plugins: []
    },
    animations: [],
    ssr: {
      pwa: false,
      prodPort: 3000,
      maxAge: 1000 * 60 * 60 * 24 * 30,
      chainWebpackWebserver(/* chain */) { },


      middlewares: [
        ctx.prod ? 'compression' : '',
        'render' // keep this as last one
      ]
    },
    pwa: {
      workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
      workboxOptions: {}, // only for GenerateSW
      chainWebpackCustomSW(/* chain */) { },


      manifest: {
        name: `Quasar App`,
        short_name: `Quasar App`,
        description: `A Quasar Project`,
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            src: 'icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-webpack/developing-cordova-apps/configuring-cordova
    cordova: {
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-webpack/developing-capacitor-apps/configuring-capacitor
    capacitor: {
      hideSplashscreen: true
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-webpack/developing-electron-apps/configuring-electron
    electron: {
      bundler: 'packager', // 'packager' or 'builder'

      packager: {
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        appId: 'memorize'
      },

      // "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain

      chainWebpackMain(/* chain */) { },



      chainWebpackPreload(/* chain */) { },

    }
  }
});
