import { createStore } from 'vuex'

export default createStore({
  state: {
    productList: [
      {
        name: '巧克力輕乳酪藍莓夾心蛋糕',
        price: 12.5,
        image: 'image-chocolate-cake-desktop.jpg'
      },
      {
        name: '巧克力慕斯圓頂小蛋糕',
        price: 10.5,
        image: 'image-chocolate-mousse-dome-cake-desktop.jpg'
      },
      {
        name: '法式原味千層',
        price: 6.5,
        image: 'image-cream-crepe-cake-desktop.jpg'
      },
      {
        name: '清檸柑橘抹茶千層',
        price: 7.5,
        image: 'image-mille-crepe-cake-desktop.jpg'
      },
      {
        name: '咖啡乳酪塔',
        price: 10.5,
        image: 'image-coffee-cheese-tart-desktop.jpg'
      }
    ]
  },
  getters: {
    allProducts: (state) => state.productList
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
