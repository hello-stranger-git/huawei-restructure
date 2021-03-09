<!--今日热力图-->
<template>
  <div class="todayhot">
    <div class="title">今日热力图</div>
    <div class="more">
      <span>更多</span>
      <svg-icon icon-class="arrowRightIcon"/>
    </div>
    <div class="pic">
      <img :src="todayHotPic ? todayHotPic : defaultPic" />
    </div>
    <div class="time">{{ time }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      defaultPic: require('@/assets/image/home/todayhot/defaultIcon.png'),
      todayHotPic: require('@/assets/image/home/todayhot/heatMap.png'),
      time: '12/02 19:42:58'
    }
  }
}
</script>

<style lang="less" scoped>
.todayhot {
  position: relative;
  .rem(height,327px);
  .rem(border-radius,10px);
  background-color: #fff;
  overflow: hidden;
  .title {
    .rem(padding-top,12px);
    .rem(padding-left,12px);
    .rem(font-size,18px);
    .rem(height, 25px);
    .rem(line-height, 25px);
    color: #141414;
    font-weight: bold;
  }
  .more {
    position: absolute;
    .rem(top,16px);
    .rem(right,11px);
    .rem(font-size,12px);
    .rem(height, 17px);
    .rem(line-height, 17px);
    color: #a4a4a4;
  }
  .pic {
    .rem(border-radius,10px);
    .rem(margin-top,12px);
    .rem(margin-left,13px);
    .rem(margin-right,12px);
    .rem(height,241px);
    .rem(width,326px);
    .rem(height,241px);
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .time {
    .rem(font-size,12px);
    .rem(height, 17px);
    .rem(line-height, 17px);
    .rem(margin-top,8px);
    .rem(padding-right,12px);
    color: #141414;
    text-align: right;
  }
}
</style>
