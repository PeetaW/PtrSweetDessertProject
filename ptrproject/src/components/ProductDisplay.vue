<template>
  <div class="carousel-container">
    <div class="carousel">
      <div class="carousel-item" v-for="product,id in allProducts" v-bind:key="id">
        <router-link :to="'/product'" class="customLink">
          <img :src="require(`@/assets/image/${product.image}`)" alt="">
          <div class="carousel-item-name">{{ product.name }}<br>價格:${{ product.price }}</div>
        </router-link>
      </div>
    </div>
    <div class="carousel">
      <div class="carousel-item" v-for="product,id in allProducts" v-bind:key="id">
        <router-link :to="'/product'" class="customLink">
          <img :src="require(`@/assets/image/${product.image}`)" :alt="product.name">
          <div class="carousel-item-name">{{ product.name }}<br>價格:${{ product.price }}</div>
        </router-link>
      </div>
    </div>
    <div class="carousel">
      <div class="carousel-item" v-for="product,id in allProducts" v-bind:key="id">
        <router-link :to="'/product'" class="customLink">
          <img :src="require(`@/assets/image/${product.image}`)" :alt="product.name">
          <div class="carousel-item-name">{{ product.name }}<br>價格:${{ product.price }}</div>
        </router-link>
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
  }
  // methods: {
  //   logProduct () {
  //     console.log(this.allProducts)
  //   }
  // },
  // mounted () {
  //   this.logProduct()
  // }
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
  margin: 0px auto;
  margin-bottom: 30px;
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
    width: 100px;
    height: 100%;
  }
  &::after {
    content: "";
    position: absolute;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), #bed1bd);
    top: 0;
    right: 0;
    z-index: 2;
    width: 100px;
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
  cursor: pointer;
  &:hover{
    img{
      transform: scale(1.2);
    }
    div.carousel-item-name{
    bottom: 10px;
    }
  }
}
img {
  width: 100%;
  height: 100%;
  transition:cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.3s;
}

div.carousel-item-name{
  // border: solid 1px black;
  width: 207px;
  padding: 5px;
  position: absolute;
  bottom: -100px;
  transform: translateX(-2%);
  background-color: rgba(192, 210, 189, 0.8);
  transition: bottom 0.3s;
  font-size: 1.3rem;
  white-space: pre-wrap;
  &:hover{
    text-decoration: underline;
  }
}

.customLink{
  text-decoration: none;
  color: inherit;
  &:hover{
    color: inherit;
    text-decoration: none;
  }
  &:focus{
    color: inherit;
    text-decoration: none;
  }
  &:active{
    color: inherit;
    text-decoration: none;
  }
}
</style>
