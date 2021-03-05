<template>
    <van-popup :close-on-click-overlay="false" @click-overlay="clickOverlay" v-model="show" round position="bottom" :style="{ height: '60%' }" >
      <slot></slot>
    </van-popup>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // 点击遮罩层
    clickOverlay () {
      this.$emit('clickOverlay')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
