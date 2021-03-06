<!--考勤-->
<template>
  <div class="checkWork">
    <TopTitle title="考勤" @onClickLeft="onClickLeft"/>
    <div class="content">在这个标签里面写</div>
  </div>
</template>

<script>
import TopTitle from '@/components/topTitle'
export default {
  data () {
    return {
      rootPath: ''// 记录上级跳转的路由
    }
  },
  components: {
    TopTitle
  },
  methods: {
    onClickLeft () {
      this.rootPath = localStorage.getItem('checkWork')
      this.$router.push({ path: this.rootPath })
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.beforeUrl = from.path
    })
  },
  mounted () {
    this.$nextTick(() => {
    // 获取上级路由
      localStorage.setItem('checkWork', this.beforeUrl)
    })
  }
}
</script>

<style lang="less" scoped>
.content{//不要改
  background-color: bisque;
  .rem(padding-top,44px);
  box-sizing: border-box;
}
</style>
