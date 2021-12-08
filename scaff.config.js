module.exports = {
  main: {
    title: 'LinkJS Vue',
    app: `App.vue`,
    mount: `#app`,
  },

  registry: {
    host: true,
  },

  extract: {
    util: '/utils/*.js',
    custom: '/custom/*.js',
  },

  theme: {
    'primary-color': '#ec2c34',
  },

  lessVariables: '/variables.module.less',

  // 构建时插件
  // plugins: [],

  // 依赖拓展
  // extensions: [],
};
