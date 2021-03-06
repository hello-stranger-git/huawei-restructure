<template>
  <div class="topTitle">
    <van-nav-bar :title="title" :left-text="leftText" :left-arrow="leftArrowHidden" @click-left="onClickLeft" @click-right="onClickRight">
      <template #right>
        <!--右边插槽-->
        <slot />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  props: {
    // 中间title
    title: {
      type: String,
      default: ''
    },
    // 左边title
    leftText: {
      type: String,
      default: ''
    },
    // 左侧是否显示
    leftArrowHidden: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    // 点击左边按钮
    onClickLeft () {
      this.$emit('onClickLeft')
    },

    // 点击右边按钮
    onClickRight () {
      this.$emit('onClickRight')
    }
  }
}
</script>

<style lang="less" scoped>
.topTitle{
  display: fixed;
  top: 0;
  width: 100%;
  box-sizing: border-box;
}
/deep/.van-nav-bar__title{
  .rem(font-size,18px);
  font-weight: bold;
  color: #000000;
}
/deep/.van-nav-bar{
    .rem(line-height,44px);
  .van-nav-bar__content{
    .rem(height,44px);
    .van-nav-bar__left{
      .rem(font-size,14px);
      .rem(font-size,14px);
      .rem(padding-left,14px);
    }
  }
}
/deep/.van-nav-bar__arrow{
  color: #000000;
  .rem(font-size,19px)
}
// 头部
/deep/.van-hairline--bottom::after {
  border: none;
}
</style>
