<template>
  <div class="home">
    <Notice/>
    <Navbar/>
    <EnterStore/>
    <FlowTrend/>
    <OutFlow/>
    <TodayHot/>
    <CustomerFeature/>
    <FlowPrice/>
    <Video/>
    <!--navbar-->
  </div>
</template>

<script>
import Notice from './notice'
import Navbar from './navbar'
import EnterStore from './enterstore'
import FlowTrend from './flowtrend'
import OutFlow from './outflow'
import TodayHot from './todayhot'
import CustomerFeature from './customerfeature'
import FlowPrice from './flowprice'
import Video from './video'
export default {
  components: {
    Notice,
    Navbar,
    EnterStore,
    FlowTrend,
    OutFlow,
    TodayHot,
    CustomerFeature,
    FlowPrice,
    Video
  }
}
</script>

<style lang="less" scoped>
.home{
  background-color: #ececec;
  .rem(padding-bottom,49px);
}
.notice{
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  .rem(top,44px);
}
.navbar{
  .rem(margin-top,80px);
}
.enterstore,.flowtrend,.outflow,.todayhot,.customerfeature,.flowprice,.video{
  .rem(margin,12px);
}
</style>
