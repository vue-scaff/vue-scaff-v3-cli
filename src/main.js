// Use Antv
import * as Antv from 'ant-design-vue';

// Use Antv Icons
import * as Icons from '@ant-design/icons-vue';

/**
 * Scaffold by Joenix
 * ========== ========== ==========
 */
export default ({ app, util, route, store, style, i18n, $http, md, custom }, next) => {
  // Extension Antv
  app.use(Antv);

  // Register Icons
  util.get().foreach(Icons, (icon, key) => app.component(key, icon));

  // Extension Icons
  app.config.globalProperties.$icons = Icons;

  // Running
  next();

  // Special Console
  console.log(`🅅🅄🄴 ­­🅂🄲🄰🄵🄵`);
};
