<template lang="html">
  <div>
    <Heador/>
    <Content/>
    <Footer/>
  </div>
</template>
<script>
import Heador from '../public/header'
import Content from '../public/content'
import Footer from '../public/footer'
export default {
  components: {
    Heador,
    Content,
    Footer
  }
}
</script>
<style lang="scss">

</style>
