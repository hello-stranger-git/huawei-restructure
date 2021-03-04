<!--客流-->
<template>
  <div class="flow">
      <van-tabs title-active-color="#FA010A" class="menu" @click="toggleTag" v-model="active" @change="changeTag" @rendered="renderedTag">
        <van-tab v-for="item in tabData" :title="item.title" :name="item.name" :to="item.path" :key="item.id">
        </van-tab>
      </van-tabs>
      <router-view class="context "/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabData: [
        {
          id: 0,
          title: '当日进店',
          path: '/flow/enterStore',
          name: 'FlowEnterStore'
        },
        {
          id: 1,
          title: '客流走势',
          path: '/flow/flowtrend',
          name: 'FlowFlowtrend'
        },
        {
          id: 2,
          title: '客群特征',
          path: '/flow/customerfeature',
          name: 'FlowCustomerFeature'
        },
        {
          id: 3,
          title: '客流与客单价',
          path: '/flow/flowprice',
          name: 'FlowFlowPrice'
        },
        {
          id: 4,
          title: '店外客流',
          path: '/flow/outflow',
          name: 'FlowOutFlow'
        },
        {
          id: 5,
          title: '热力图',
          path: '/flow/hotmap',
          name: 'FlowHotMap'
        }
      ],
      active: 'FlowEnterStore'
    }
  },
  methods: {
    toggleTag (name, title) {
      this.active = name
    },
    changeTag (name, title) {
      this.active = name
    },
    renderedTag (name, title) {
      this.active = name
      this.$router.push({ name: name })
    }
  }
}
</script>

<style lang="less" scoped>
.flow{
  .rem(padding-top,44px);
  .rem(padding-bottom,49px);
  box-sizing: border-box;
  // height: 100%;
  background-color: #ececec;
}
.menu{
  .rem(height,52px);
  background-color: bisque;
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  .rem(top,44px);
  &.van-tabs--line{
     /deep/.van-tabs__wrap{
       height: 100%;
       .van-tabs__nav--complete{
         padding:0;
       }
        .van-tabs__line{
          display: none
        }
        .van-tab{
          .rem(font-size,14px);
          color: #A4A4A4;
          font-weight: 400;
          &.van-tab--active{
              .rem(font-size,14px);
              font-weight: bold;
              color: #FA010A;
            }
        }
      }
  }
}
.context{
  .rem(margin-top,64px);
  background-color: saddlebrown !important;
  .rem(margin-bottom,12px);
  .rem(margin-left,12px);
  .rem(margin-right,12px);
  box-sizing: border-box;
  height: 1000px;
}
</style>
