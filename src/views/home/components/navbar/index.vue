<template>
  <div class="navbar">
    <NavBarItem v-for="item in data" :key="item.id" :data="item" @jump="jump(item.name)"/>
  </div>
</template>

<script>
import NavBarItem from './components/navbarItem'
export default {
  data () {
    return {
      data: [
        {
          id: 1,
          title: '报警信息',
          icon: require('@/assets/image/home/navbar/baoJing.png'),
          unread: 100,
          name: 'PoliceMessage'
        },
        {
          id: 2,
          title: '待整改',
          icon: require('@/assets/image/home/navbar/daiZhengGai.png'),
          unread: 0,
          name: 'WaitReform'
        },
        {
          id: 3,
          title: '考勤',
          icon: require('@/assets/image/home/navbar/kaoQin.png'),
          unread: 3,
          name: 'CheckWork'
        },
        {
          id: 4,
          title: '巡查统计',
          icon: require('@/assets/image/home/navbar/xunCha.png'),
          unread: 0,
          name: 'CheckCount'
        }
      ]
    }
  },
  components: {
    NavBarItem
  },
  methods: {
    jump (name) {
      this.$router.push({ name: name })
    }
  }
}
</script>

<style lang="less" scoped>
.navbar{
  .rem(height,103px);
  background:cadetblue;
  display: flex;
}
</style>
