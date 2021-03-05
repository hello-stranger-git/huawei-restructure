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
  </div>
</template>

<script>
import Notice from './components/notice'
import Navbar from './components/navbar'
import EnterStore from './components/enterstore'
import FlowTrend from './components/flowtrend'
import OutFlow from './components/outflow'
import TodayHot from './components/todayhot'
import CustomerFeature from './components/customerfeature'
import FlowPrice from './components/flowprice'
import Video from './components/video'
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
  // z-index: -1
}
.navbar{
  .rem(margin-top,80px);
}
.enterstore,.flowtrend,.outflow,.todayhot,.customerfeature,.flowprice,.video{
  .rem(margin,12px);
}
</style>
