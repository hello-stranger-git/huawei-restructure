<!--底部导航栏-->
<template>
  <div class="footer">
    <van-tabbar route active-color="#FA010A" inactive-color="#b2b2b2">
      <van-tabbar-item v-for="item in tabbarData" :key="item.id" :to="{name:item.to}">
            <span>{{item.title}}</span>
            <template #icon="props">
              <img :src="props.active ? item.active_icon : item.icon" />
            </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // tabbar数据
      tabbarData: [
        {
          id: 1,
          title: '首页',
          to: 'Home',
          icon: require('@/assets/image/footer/home.png'),
          active_icon: require('@/assets/image/footer/home_select.png')
        },
        {
          id: 2,
          title: '客流',
          to: 'Flow',
          icon: require('@/assets/image/footer/flow.png'),
          active_icon: require('@/assets/image/footer/flow_select.png')
        },
        {
          id: 3,
          title: '点检',
          to: 'Check',
          icon: require('@/assets/image/footer/check.png'),
          active_icon: require('@/assets/image/footer/check_select.png')
        },
        {
          id: 4,
          title: '应用',
          to: 'App',
          icon: require('@/assets/image/footer/app.png'),
          active_icon: require('@/assets/image/footer/app_select.png')
        },
        {
          id: 5,
          title: '我的',
          to: 'User',
          icon: require('@/assets/image/footer/user.png'),
          active_icon: require('@/assets/image/footer/user_select.png')
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.footer{
  .rem(height,49px);
  background:rebeccapurple;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  /deep/.van-tabbar-item__icon{
    img{
      .rem(width, 26px);
      .rem(height, 26px);
    }
  }
   /deep/.van-tabbar-item__text{
      .rem(font-size, 10px);
    }
}
</style>
