<template>
  <h2>歡迎來到彼得甜點小舖，享受甜味紓解壓力</h2>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <BannerPicture/>
  </div>
  <h2>商品陳列區</h2>
  <div class="productDisplay">
    <ProductCarousel/>
  </div>
  <AboutView/>
  <h2>故事小天地</h2>
  <div class="storyFrontPage">
    <StoryFrontPage/>
  </div>
</template>

<script>
import BannerPicture from '../components/BannerPicture.vue'
import ProductCarousel from '../components/ProductDisplay.vue'
import StoryFrontPage from '@/components/StoryFrontPage.vue'
import AboutView from './AboutView.vue'

export default {
  name: 'HomeView',
  components: {
    BannerPicture,
    ProductCarousel,
    StoryFrontPage,
    AboutView
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=LXGW+WenKai+Mono+TC&family=LXGW+WenKai+TC&family=Playwrite+GB+S+Guides:ital@0;1&display=swap');

* {
  font-family: "Noto Sans TC", serif;
}

div.productDisplay {
  display: flex;
  flex-direction: row;
  // border: solid 1px black;
  // width: 1000px;
  // margin: 0 auto;
  // overflow: hidden;
}

h2 {
  font-size: 2rem;
  color:#698c88;
  font-weight: 700;
}

@media screen and (max-width: 600px) {
  h2{
    padding: 0 50px;
  }
}
</style>
