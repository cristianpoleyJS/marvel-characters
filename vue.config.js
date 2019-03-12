module.exports = {
  // Css into bundle
  css: {
    extract: {
      filename: 'css/app.css',
      chunkFilename: 'css/[name].css'
    },
    loaderOptions: {
      sass: {
        data: `
          '@import "@/assets/scss/_variables.scss";',
          '@import "@/assets/scss/_mixins.scss";'
        `
      }
    }
  },

  chainWebpack: config => {
    config.module.rule('svg')
      .use('file-loader')
      .loader('url-loader')
      .tap(options => {
        options.limit = 300000
        return options
      })
    config.module.rule('eslint')
      .use('eslint-loader')
      .options({ fix: true })
  }
}
