<template>
  <div class="header">
    <!-- 头部左侧 -->
    <div class="header_left"  @click="shopSelection">
      <!-- <img :src="logo"/> -->
      <svg-icon icon-class="logo"></svg-icon>
      <p>{{title}}</p>
      <van-icon name="arrow-down" />
    </div>
    <!-- 头部右侧 -->
    <div class="header_right">
      <p>{{uname}}</p>
      <van-icon @click="news" :name="newsIcon" :badge="getBadge > 999?  '999+' : getBadge" />
    </div>
    <DownPopup  :show="selectStoreShow" @clickOverlay="closePopup">

      <SelectStore/>
    </DownPopup>
  </div>
</template>

<script>
import DownPopup from '@/components/downPopup'
import SelectStore from './components/selectStore'
export default {
  data () {
    return {
      newsIcon: require('@/assets/image/header/newsIcon.png'),
      logo: require('@/assets/image/header/huawei_logo.png'), // 店铺logo
      title: '龙岗区华为体验店', // 店铺名称
      uname: '兰宇贵', // 账号昵称
      getBadge: 12, // 未读消息数量
      selectStoreShow: false// 控制选择门店弹出框
    }
  },
  methods: {
    news () {
      // this.$toast('消息功能暂未开发')
      this.$router.push({ name: 'Message' })
    },
    shopSelection () {
      // this.$toast('店铺选择功能暂未开发')
      this.selectStoreShow = true
    },
    // 点击弹出框的遮罩层
    closePopup () {
      this.selectStoreShow = false
    }
  },
  components: {
    DownPopup,
    SelectStore
  }
}
</script>

<style lang="less" scoped>
.header{
  .rem(height, 44px);
  position: fixed;
  top:0;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items:center;
  z-index: 10;
  &>div{
    display: flex;
    align-items:center;
  }
  // 头部左侧样式
  .header_left{
    .rem(margin-left, 12px);
    // img{
    //   .rem(width, 30px);
    //   .rem(height, 30px);
    // }
    .svg-icon{
      .rem(width, 30px);
      .rem(height, 30px);
    }
    &>p{
      .rem(margin-left,4px) ;
      .rem(font-size, 14px) ;
      color: #000000;
      .rem(max-width, 152px);
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
    }
    .van-icon{
      .rem(margin-left, 3px );
      .rem(font-size, 10px);
    }
  }
  // 头部左侧样式
  .header_right{
    .rem(margin-right,21px );
    .van-icon{
      .rem(margin-left,30px) ;
      .rem(font-size, 24px);
      .van-info{
       .rem( font-size, 12px);
      }
    }
    &>p{
      color: #141414;
      .rem(font-size,14px);
    }
  }
}
</style>
