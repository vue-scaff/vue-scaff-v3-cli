<style lang="less" scoped>
.page {
}
</style>

<template>
  <layout :collapse="collapse" :visible="visible">
    <template v-slot:avatar>
      <a-image :width="60" src="https://linkedcare.oss-cn-shanghai.aliyuncs.com/linkjs-logo.png" />
      <span>Vue Scaff</span>
    </template>

    <template v-slot:sider>
      <a-sub-menu key="welcome">
        <template #title>欢迎使用</template>

        <a-menu-item key="start">新手上路</a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="registry">
        <template #title>文件提取</template>

        <a-menu-item key="util">工具类</a-menu-item>
        <a-menu-item key="component">全局组件</a-menu-item>
        <a-menu-item key="route">路由</a-menu-item>
        <a-menu-item key="store">状态管理</a-menu-item>
        <a-menu-item key="filter">数据过滤</a-menu-item>
        <a-menu-item key="directive">自定义指令</a-menu-item>
        <a-menu-item key="i18n">国际化</a-menu-item>
        <a-menu-item key="custom">自定义属性</a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="extension">
        <template #title>拓展能力</template>

        <a-menu-item key="antv">组件库引入</a-menu-item>
        <a-menu-item key="route-interceptor">路由拦截</a-menu-item>
        <a-menu-item key="store-plugin">状态管理插件</a-menu-item>
        <a-menu-item key="http-interceptor">请求拦截</a-menu-item>
      </a-sub-menu>
    </template>

    <template v-slot:header>
      <!-- collapse -->
      <a-button type="primary" @click="collapseTrigger">
        <component :is="collapse ? 'MenuUnfoldOutlined' : 'MenuFoldOutlined'" />
      </a-button>

      <!-- Drawer -->
      <a-button type="link" @click="drawerTrigger">
        <component is="QuestionCircleOutlined" />
        <span>帮助</span>
      </a-button>

      <!-- Drawer Popup -->
      <a-drawer title="Scaffold Helper" placement="right" :closable="false" v-model:visible="visible">
        <p>Anything Else ?</p>
      </a-drawer>
    </template>

    <template v-slot:main>
      <router-view />
    </template>
  </layout>
</template>

<script>
export default {
  data() {
    return {
      collapse: false,
      visible: false,
    };
  },
  methods: {
    collapseTrigger() {
      this.collapse = !this.collapse;
    },
    drawerTrigger() {
      this.visible = !this.visible;
    },
  },
  mounted() {
    this.$util.aHello();
    this.$util.hello('Scaffold');
  },
};
</script>
