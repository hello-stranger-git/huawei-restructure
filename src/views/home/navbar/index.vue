<template>
  <div class="navbar">
    <NavBarItem v-for="item in data" :key="item.id" :data="item"/>
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
          name: '报警信息',
          icon: require()
        },
        {
          id: 2,
          name: '待整改',
          icon: require()
        },
        {
          id: 3,
          name: '考勤',
          icon: require()
        },
        {
          id: 4,
          name: '巡查统计',
          icon: require()
        }
      ]
    }
  },
  components: {
    NavBarItem
  }
}
</script>

<style lang="less" scoped>
.navbar{
  .rem(height,103px);
  background:cadetblue;
}
</style>
