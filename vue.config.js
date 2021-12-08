// Use vue-cli-config-extension
const { extension } = require('@scaff/vue-cli-plugin-node/extension');

module.exports = extension({
  // No Source Map
  productionSourceMap: false,

  // Hashing Mode
  filenameHashing: true,

  // Compiler in Runtime
  runtimeCompiler: true,

  // Public Path
  publicPath: '/',

  // Configure Webpack
  configureWebpack: {
    // 拓展
    externals: {},
  },
});
