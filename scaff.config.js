module.exports = {
  main: {
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
};
