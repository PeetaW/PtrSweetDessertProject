<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <BannerPicture/>
  </div>
  <div class="productDisplay">
    <ProductCarousel/>
  </div>
</template>

<script>
import BannerPicture from '../components/BannerPicture.vue'
import ProductCarousel from '../components/ProductDisplay.vue'

export default {
  name: 'HomeView',
  components: {
    BannerPicture,
    ProductCarousel
  }
}
</script>

<style lang="scss" scoped>
div.productDisplay {
  display: flex;
  flex-direction: row;
  border: solid 1px black;
  // width: 1000px;
  // margin: 0 auto;
  // overflow: hidden;
}
</style>
