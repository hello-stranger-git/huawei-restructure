<!--信息-->
<template>
  <div class="message">
    <TopTitle title="消息" @onClickLeft="onClickLeft"/>
    <MessageItem/>
  </div>
</template>

<script>
import TopTitle from '@/components/topTitle'
import MessageItem from './components/messageItem'
export default {
  components: {
    TopTitle,
    MessageItem
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
