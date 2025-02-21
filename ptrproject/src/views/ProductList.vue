<template>
<div class="productCard" v-for="product,id in allProducts" v-bind:key="id">
  <div class="productImage">
    <img v-bind:src="require(`@/assets/image/${product.image}`)" alt="">
  </div>
  <div class="productInfo">
    <div class="productName">{{product.name}}</div>
    <div class="productPrice">${{product.price}} <hr></div>
    <div class="productDescript">{{ product.description }} <hr></div>
    <div class="productIngredients">材料: {{product.ingredient}}</div>
    <div class="productCalories">熱量 {{product.calories}} 大卡</div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ProductList',
  computed: {
    ...mapGetters(['allProducts'])
  }
}
</script>

<style lang="scss" scoped>
div.productCard {
  width: 220px;
  margin: 30px 20px;
  display: inline-block;
  background-color: darken($color: #bed1bd, $amount: 10);
  box-shadow: 10px 10px 10px rgba(145, 162, 143, 0.8);
  box-sizing: border-box;
  border-radius: 15px;
  vertical-align: top;
  cursor: pointer;
  &:hover {
    img{
      transform: scale(1.2);
    }
    div.productName,
    div.productPrice,
    div.productDescript,
    div.productIngredients,
    div.productCalories{
      color: #698c88;
  }
  }
}

div.productImage {
  height: 200px;
  width: 80%;
  border-color: red;
  border-radius: 15px;
  overflow: hidden;
  margin: 20px auto 10px auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    transition: ease-in-out 0.2s;
  }
}

div.productInfo {
  // height: 100px;
  width: 80%;
  border-color: orange;
  margin: 0px 0px 10px 0px;
}

div.productName, div.productPrice, div.productDescript, div.productIngredients, div.productCalories {
  width: 100%;
  height: 50%;
  margin: 5px 0px;
  padding: 0px 15px;
  font-family: "LXGW WenKai TC", serif;
  text-align: left;
  font-size: 1.1rem;
  transition: cubic-bezier(0.215, 0.610, 0.355, 1) 0.5s;
  white-space: pre-line;
  line-height: 1.7rem;
}
</style>
