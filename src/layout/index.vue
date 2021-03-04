<template>
  <div style="height:100%;background-color:#ececec">
      <Header />
      <router-view />
      <Footer />
  </div>
</template>

<script>
import Header from './header'
import Footer from './footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="less" scoped></style>
