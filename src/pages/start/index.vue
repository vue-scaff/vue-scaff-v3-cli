<style lang="less" scoped>
.start {
  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    overflow: hidden;

    background: url('@/assets/avatar.gif') center/cover no-repeat;
  }
}
</style>

<template>
  <div class="start">
    <box>
      <!-- 组件库文档 -->
      <h1>Ant Design Vue 2.x: <a target="_blank" href="https://2x.antdv.com/">https://2x.antdv.com/</a></h1>

      <!-- 自定义指令 -->
      <div class="avatar" v-css-position="{ top: '6px', right: '108px' }" />
    </box>

    <box>
      <!-- 标题 -->
      <template v-slot:title>
        <a-space>
          <!-- 国际化切换 -->
          <a-switch checked-children="英" un-checked-children="中" v-model:checked="language" />
          <span>
            {{ $t('hello', { msg: '世界' }) }}
          </span>
        </a-space>
      </template>

      <!-- 组件 -->
      <a-timeline pending="Preloading ...">
        <a-timeline-item color="blue">
          <template #dot><clock-circle-outlined /></template>
          Technical Testing - 2021-07-03
        </a-timeline-item>
        <a-timeline-item color="green">Create a Services Site - 2020-10-10</a-timeline-item>
        <a-timeline-item color="blue">Create a Client Site - 2020-11-11</a-timeline-item>
        <a-timeline-item color="red">
          <p>Resolving Network Project 7258</p>
          <p>Resolving GraphQL Schema 2000</p>
          <p>Resolving Process Endness 205800</p>
        </a-timeline-item>
        <a-timeline-item>
          <p>Testing 1st</p>
          <p>Testing Second</p>
          <p>Testing Third</p>
          <p>Testing 4th</p>
        </a-timeline-item>
        <a-timeline-item color="gray">
          <p>Todo 1 - 2000-04-01</p>
          <p>Todo 2 - 2000-04-11</p>
        </a-timeline-item>
      </a-timeline>

      <a-space :size="20">
        <a-popover title="Powered by">
          <template #content>
            <p>LinkJS</p>
          </template>
          <a-button type="primary">欢迎使用 LinkJS 脚手架</a-button>
        </a-popover>

        <!-- 状态管理 -->
        <a-button @click="$store.dispatch('start/ACTION_COUNT')">计数器：{{ start.count }}</a-button>

        <!-- 数据过滤 -->
        <span>我有：{{ $filter.dollar(start.count) }}</span>
      </a-space>
    </box>

    <box>
      <a-space>
        <a-button type="ghost" @click="httpGet">点我发送 GET 给 www.baidu.com</a-button>
        <a-button type="dashed" @click="httpPost">点我发送 POST 给 www.qq.com</a-button>
      </a-space>
    </box>

    <box>
      <a-statistic-countdown title="距离项目上线还有：" :value="time" format="HH:mm:ss:SSS" />
    </box>
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: false,
      time: Date.now() + 1000 * 60 * 60 * 24 * 1,
    };
  },
  watch: {
    language() {
      this.$i18n.locale = ['zh-CN', 'en-US'][this.language - 0];
    },
  },

  methods: {
    httpGet() {
      this.$http('http://www.baidu.com/').get({ space: `baidu` });
    },
    httpPost() {
      this.$http('http://www.qq.com/').post({ space: `qq` });
    },
  },
};
</script>
