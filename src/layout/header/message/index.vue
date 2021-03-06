<!--信息-->
<template>
  <div class="message">
    <TopTitle title="消息" @onClickLeft="onClickLeft"/>
    <div class="content">
      <MessageItem/>
      在这个标签里面写
    </div>
  </div>
</template>

<script>
import TopTitle from '@/components/topTitle'
import MessageItem from './components/messageItem'
export default {
  data () {
    return {
      rootPath: ''// 记录上级跳转的路由
    }
  },
  components: {
    TopTitle,
    MessageItem
  },
  methods: {
    onClickLeft () {
      this.rootPath = localStorage.getItem('message')
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
      localStorage.setItem('message', this.beforeUrl)
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
