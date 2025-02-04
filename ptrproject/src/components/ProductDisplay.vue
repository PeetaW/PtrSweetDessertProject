<template>
  <div class="carousel-container">
    <div class="carousel">
      <div class="carousel-item" v-for="product,id in allProducts" v-bind:key="id">
        <img :src="require(`@/assets/image/${product.image}`)" alt="">
      </div>
    </div>
    <div class="carousel">
      <div class="carousel-item" v-for="product,id in allProducts" v-bind:key="id">
        <img :src="require(`@/assets/image/${product.image}`)" :alt="product.name">
      </div>
    </div>
    <div class="carousel">
      <div class="carousel-item" v-for="product,id in allProducts" v-bind:key="id">
        <img :src="require(`@/assets/image/${product.image}`)" :alt="product.name">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ProductCarousel',
  computed: {
    ...mapGetters(['allProducts'])
  },
  methods: {
    logProduct () {
      console.log(this.allProducts)
    }
  },
  mounted () {
    this.logProduct()
  }
}

</script>

<style lang="scss" scoped>
// * {
//   border: solid 1px black;
// }

@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

div.carousel-container {
  margin: 0 auto;
  width: 100%;
  display: flex;
  overflow: hidden;
  position: relative;
  &:hover div.carousel {
    animation-play-state: paused;
  }
  &::before {
    content: "";
    position: absolute;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), #bed1bd);
    top: 0;
    left: 0;
    z-index: 2;
    width: 400px;
    height: 100%;
  }
  &::after {
    content: "";
    position: absolute;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), #bed1bd);
    top: 0;
    right: 0;
    z-index: 2;
    width: 400px;
    height: 100%;
  }
}

div.carousel {
  display: flex;
  min-height: 250px;
  min-width: 1200px;
  animation: 15s slide linear infinite;
  gap: 40px;
  padding-right: 40px
}

div.carousel-item {
  width: 25%;
  height: 250px;
  font-size: xx-large;
  // animation: 5s slide linear infinite;
}
img {
  width: 100%;
  height: 100%;
}
</style>
