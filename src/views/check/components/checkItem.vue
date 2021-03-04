<!--点检每一项-->
<template>
  <div class="checkItem" @click="handleCheckItem">
    <img :src="data.icon">
    <p>{{ data.title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  },
  methods: {
    handleCheckItem () {
      this.$emit('handleCheckItem')
    }
  }
}
</script>

<style lang="less" scoped>
.checkItem{
  .rem(width,66px);
  text-align: center;
  img{
    .rem(width,66px);
    .rem(height,66px);
  }
  p{
    .rem(margin-top,10px);
    .rem(font-size,16px);
    color: #141414;
    font-weight: 400;
  }
}
</style>
