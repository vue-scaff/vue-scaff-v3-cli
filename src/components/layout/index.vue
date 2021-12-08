<style lang="less" scoped>
.layout {
  @space-half: 8px;
  @space-unit: 16px;
  @space-sider: 200px;

  & {
    position: relative;
  }

  &--avatar {
    padding: @space-half @space-unit;
    font-size: 20px;
    color: white;
    background-color: lighten(#001529, 8%);
  }

  &--sider {
    width: @space-sider;
    height: 100vh;
    position: fixed;
    left: 0;
    overflow: auto;
  }

  &--container {
    margin-left: @space-sider;
    transition: all 300ms;

    &.collapse {
      margin-left: 0;
    }
  }

  &--header,
  &--footer {
    padding: 0 @space-unit;
  }

  &--header {
    line-height: 64px;
    background-color: white;
  }

  &--footer {
    line-height: 36px;
    text-align: center;
  }

  &--space {
    width: 100%;
    justify-content: space-between;
  }

  &--main {
    min-height: calc(100vh - 100px);
  }
}
</style>

<template>
  <a-layout class="layout">
    <!-- Sider -->
    <a-layout-sider class="layout--sider" :collapsed="collapse" :collapsedWidth="0">
      <div class="layout--avatar">
        <a-space align="center" :size="10">
          <slot name="avatar" />
        </a-space>
      </div>
      <a-menu theme="dark" mode="inline" :forceSubMenuRender="true" :openKeys="['welcome']" :selectedKeys="['start']" @click="menuTrigger">
        <slot name="sider" />
      </a-menu>
    </a-layout-sider>

    <!-- Container -->
    <a-layout class="layout--container" :class="{ collapse }">
      <a-layout-header class="layout--header">
        <a-space class="layout--space">
          <slot name="header" />
        </a-space>
      </a-layout-header>

      <!-- Main -->
      <a-layout-content class="layout--main">
        <slot name="main" />
      </a-layout-content>

      <!-- Footer -->
      <a-layout-footer class="layout--footer">Powered by joenix.com</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: 'layout',

  props: {
    collapse: {
      type: [Boolean],
      default: false,
    },

    visible: {
      type: [Boolean],
      default: false,
    },
  },

  methods: {
    menuTrigger({ key }) {
      if (key) {
        this.$router.push({
          name: key,
        });
      }
    },
  },
};
</script>
