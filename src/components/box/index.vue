<style lang="less" scoped>
.box {
  background-color: white;
  border-radius: @atom;
  margin-left: @space;
  margin-right: @space;
  margin-bottom: @space;
  padding: @space;

  &:first-child {
    margin-top: @space;
  }

  &--title {
    font-weight: bold;
    border-bottom: 1px solid #f4f5f6;

    margin-bottom: @space;
    padding-bottom: @space;
  }
}
</style>

<template>
  <div class="box">
    <div class="box--title" v-if="$slots.title">
      <slot name="title" />
    </div>

    <slot />
  </div>
</template>

<script>
export default {};
</script>
