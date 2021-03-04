<template>
  <div>
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
