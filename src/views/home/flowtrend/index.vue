<!--客流走势-->
<template>
  <div class="flowtrend">
    客流走势
    <Lenged v-for="item in lengedData" :key="item.id" :data="item"/>
  </div>
</template>

<script>
import Lenged from '@/components/lenged'
export default {
  data () {
    return {
      lengedData: [
        {
          id: 1,
          color: '#FA010A',
          title: '今日 106人'
        },
        {
          id: 2,
          color: '#FF7B40',
          title: '昨日 32人/261人'
        },
        {
          id: 3,
          color: '#E5006B',
          title: '前日 87人/258人'
        }
      ]
    }
  },
  components: {
    Lenged
  }
}
</script>

<style lang="less" scoped>
.flowtrend{
  .rem(height,229px);
  background-color: #fff;
}
</style>
