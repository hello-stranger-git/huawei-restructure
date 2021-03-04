<!--今日进店-->
<template>
  <div class="enterstore">今日进店
    <StoreUserItem v-for="item in data" :key="item.id" :data="item"/>
  </div>
</template>

<script>
import StoreUserItem from '@/components/storeUserItem'
export default {
  data () {
    return {
      data: [
        {
          id: 1,
          icon: require(),
          age: '35~50岁',
          count: 0,
          vip: false
        },
        {
          id: 2,
          icon: require(),
          age: '20~35岁',
          count: 2,
          vip: true
        },
        {
          id: 3,
          icon: require(),
          age: '35~50岁',
          count: 6,
          vip: false
        },
        {
          id: 4,
          icon: require(),
          age: '35~50岁',
          count: 3,
          vip: true
        }
      ]
    }
  },
  components: {
    StoreUserItem
  }
}
</script>

<style lang="less" scoped>
.enterstore{
  .rem(height,169px);
  background-color: #fff;
}
</style>
