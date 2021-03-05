<template>
  <div class="navbarItem" @click="jump">
    <van-icon :name="data.icon" :badge="data.unread < 1 ? '' : data.unread>99 ? '99+' : data.unread" />
    <p>{{data.name}}</p>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  },
  data () {
    return {
      baoJing: require('@/assets/image/home/navbar/baoJing.png') // 报警

    }
  },
  methods: {
    jump () {
      this.$emit('jump')
    }
  }
}
</script>

<style lang="less" scoped>
.navbarItem{
  .rem(width, 50px);
  text-align: center;
  &>p{
    .rem(font-size, 12px);
    color: #000000;
    .rem(line-height, 17px);
    .rem(margin-top, 10px) ;
  }
  &>.van-icon{
  .rem(font-size, 44px);
  }
  .van-info{
    .rem(padding, 2px);
    .rem(padding-left, 6px);
    .rem(padding-right, 6px) ;
    .rem(border-radius, 10px);
    border: none;
  }
}
</style>
