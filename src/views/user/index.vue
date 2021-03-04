<!--我的-->
<template>
  <div class="user">
    <Item/>
  </div>
</template>

<script>
import Item from './components/item'
export default {
  components: {
    Item
  }
}
</script>

<style lang="less" scoped>
.user{
  .rem(padding-top,44px);
  background-color: #ececec;
}
</style>
