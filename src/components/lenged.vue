<!--图形lenged-->
<template>
  <div class="lenged">
    <span class="circel" :style="{'background-color': data.color}"></span>
    <span>{{ data.title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  },
  mounted () {
    console.log(this.data.title)
  }
}
</script>

<style lang="less" scoped>
.lenged{
  .circel{
    .rem(width,10px);
    .rem(height,10px);
    border-radius: 50%;
    display: inline-block;
  }
  &>span{
    vertical-align: middle;
    &:last-child{
      margin-left: 4px;
    }
  }
}
</style>
