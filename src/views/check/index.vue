<!--点检-->
<template>
  <div class="check">
    <CheckItem v-for="item in data" :key="item.id" :data="item" @handleCheckItem="handleCheckItem(item.name)"/>
  </div>
</template>

<script>
import CheckItem from './components/checkItem'
export default {
  data () {
    return {
      data: [
        {
          id: 1,
          icon: 'kaopingIcon',
          title: '考评',
          name: 'KP'
        },
        {
          id: 2,
          icon: 'checkIcon',
          title: '点检',
          name: 'CK'
        }
      ]
    }
  },
  components: {
    CheckItem
  },
  methods: {
    handleCheckItem (name) {
      this.$router.push({ name: name })
    }
  }
}
</script>

<style lang="less" scoped>
.check{
  .rem(padding-top,44px);
  height: 100%;
  box-sizing: border-box;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .checkItem{
    &:last-child{
      margin-top: 78px;
    }
  }
}
</style>
