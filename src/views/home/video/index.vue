<!--本店视频-->
<template>
  <div class="video">
    本店视频
    <VideoItem v-for="item in data" :key="item.id" :data="item"/>
  </div>
</template>

<script>
import VideoItem from './components/videoItem'
export default {
  data () {
    return {
      data: [
        {
          id: 1,
          // icon: require(),
          time: '16:22:30',
          line: true,
          title: '大厅3'
        },
        {
          id: 2,
          // icon: require(),
          time: '16:25:30',
          line: true,
          title: '大厅1'
        },
        {
          id: 3,
          // icon: require(),
          time: '16:22:30',
          line: true,
          title: '大厅2'
        },
        {
          id: 4,
          // icon: require(),
          time: '16:22:30',
          line: false,
          title: '人脸识别进门'
        }
      ]
    }
  },
  components: {
    VideoItem
  }
}
</script>

<style lang="less" scoped>
.video{
  .rem(height,309px);
  background-color: #fff;
}
</style>
