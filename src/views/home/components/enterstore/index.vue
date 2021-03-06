<!--今日进店-->
<template>
  <div class="enterstore">
    <div>今日进店</div>
    <div class="enterstore_content">
      <StoreUserItem v-for="item in data" :key="item.id" :data="item"/>
    </div>
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
          // icon: require(),
          date: '19:44:15',
          age: '35~50岁',
          count: 2, // 到店次数
          vip: false,
          crossStore: true, // 跨店
          sex: 0 // 0 女  1 男
        },
        {
          id: 2,
          // icon: require(),
          date: '19:44:15',
          age: '20~35岁',
          count: 1,
          vip: true

        },
        {
          id: 3,
          // icon: require(),
          date: '19:44:15',
          age: '35~50岁',
          count: 6,
          vip: false
        },
        {
          id: 4,
          // icon: require(),
          date: '19:44:15',
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
  .rem(padding,12px);
  background-color: #fff;

.enterstore_content{
  display: flex;
}
}
</style>
