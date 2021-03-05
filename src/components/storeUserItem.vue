<!--当日进店每一个用户-->
<template>
  <div class="storeUserItem">
    <div class="storeUserItem_img">
      <img class="userIcon" :src="data.icon ? data.icon : defaultTouXaing"/>
      <img v-if="data.vip" class="vipIcon" :src="vipIcon"/>
    </div>
    <!-- 时间 -->
    <p style="color:#787878">
      <van-icon :name="timeIcon" />
      <span>{{data.date}}</span>
    </p>
    <!-- 年龄 -->
    <p style="color:#787878">
      <van-icon :name="data.sex === 0 ? womanIcon: manIcon" />
      <span>{{data.age}}</span>
    </p>
    <!-- 到店次数及是否跨店 -->
    <p style="color:#343434">
      <van-icon :name="data.crossStore ?  storeIcon : ''" />
      <span v-if="data.count>1" :class="data.crossStore ? '': 'noIcon'">{{data.count}}次到店</span>
      <span v-else :class="data.crossStore ? '': 'noIcon'" style="color:#4A92FF">新客</span>
    </p>
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
      vipIcon: require('@/assets/image/storeUserItem/vipIcon.png'), // vip图标
      defaultTouXaing: require('@/assets/image/storeUserItem/defaultTouXaing.png'), // 用户图片不显示时默认图标
      manIcon: require('@/assets/image/storeUserItem/manIcon.png'), // 男性图标
      womanIcon: require('@/assets/image/storeUserItem/womanIcon.png'), // 女性图标
      storeIcon: require('@/assets/image/storeUserItem/storeIcon.png'), // 跨店图标
      timeIcon: require('@/assets/image/storeUserItem/timeIcon.png') // 时间图标
    }
  }
}
</script>

<style lang="less" scoped>
.storeUserItem{
  width: 65px;
  &>p{
    font-size: 12px;
    display: flex;
    align-items: center;
    span{
      display: inline-block;
      margin-left:4px ;
      line-height: 17px;
    }
  }

}
.storeUserItem_img{
  margin: 0 auto;
  position: relative;
  text-align: center;
  width: 58px;
  height: 58px;
  margin-bottom:4px ;
}
.userIcon{
  width: 58px;
  height: 58px;
}
// vip图标样式
.vipIcon{
  position: absolute;
  bottom: 0;
  width: 19.87px;
  height: 14.86px;
  right: 0;
}
.van-icon{
 font-size: 12px;
 margin-bottom:2px ;
}

// 无图标时文字左边距
.storeUserItem>p>.noIcon{
  margin-left:16px;
}
</style>
