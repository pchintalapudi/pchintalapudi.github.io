const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const buildForTest = false;
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('yaml')
        .test(/\.ya?ml?$/)
        .use('yaml-loader')
          .loader('yaml-loader')
          .end()
      .end()
      .rule('md')
        .test(/\.md$/)
        .type('asset/source')
  },
  outputDir: path.resolve(__dirname, "docs"),
  assetsDir: "static",
  publicPath: buildForTest && process.env.NODE_ENV === 'production' ? '/website-dev/' : '/',
})
