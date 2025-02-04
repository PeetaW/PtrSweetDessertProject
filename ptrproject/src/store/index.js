import { createStore } from 'vuex'

export default createStore({
  state: {
    productList: [
      {
        name: 'chocolate cake',
        price: 12.5,
        image: 'image-chocolate-cake-desktop.jpg'
      },
      {
        name: 'chocolate mousse dome cake',
        price: 10.5,
        image: 'image-chocolate-mousse-dome-cake-desktop.jpg'
      },
      {
        name: 'cream crepe cake',
        price: 6.5,
        image: 'image-cream-crepe-cake-desktop.jpg'
      },
      {
        name: 'mille crepe cake',
        price: 7.5,
        image: 'image-mille-crepe-cake-desktop.jpg'
      },
      {
        name: 'coffee cheese tart',
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
