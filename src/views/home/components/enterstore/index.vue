<!--今日进店-->
<template>
  <div class="enterstore">
    <div class="title">
      <div class="left">
        <span>今日进店</span>
        <span>(247人)</span>
      </div>
      <div class="right" @click="moreHandle">
        <span>更多</span>
        <svg-icon icon-class="arrowRightIcon"/>
      </div>
    </div>
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
  },
  methods: {
    moreHandle () {
      console.log('今日进店更多')
    }
  }
}
</script>

<style lang="less" scoped>
.enterstore{
  .rem(height,169px);
  .rem(padding,12px);
  .rem(border-radius,10px);
  background-color: #fff;
  box-sizing: border-box;
  .enterstore_content{
    display: flex;
    justify-content: space-between;
    .rem(margin-top,12px);
  }
}
.title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left{
    span{
      &:first-child{
        .rem(font-size,18px);
        .rem(line-height,25px);
        font-weight:800;
        color: #141414;
      }
      &:last-child{
        .rem(font-size,12px);
        .rem(line-height,17px);
        .rem(margin-left,3px);
        font-weight: 400;
        color: #A4A4A4;
      }
    }
  }
  .right{
    span{
      &:first-child{
        .rem(font-size,12px);
        .rem(line-height,17px);
        color: #A4A4A4;
      }
      // &:last-child{
      //   .rem(font-size,10px);
      //   .rem(margin-left,10px);
      //   color: #898989;
      // }
    }
  }
}
</style>
