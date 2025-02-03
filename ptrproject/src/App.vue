<template>
  <nav>
    <font-awesome-icon :icon="['fas', 'utensils']" />
    <h3>Ptr Dessert</h3>
    <font-awesome-icon :icon="['fas', 'bread-slice']" /> |
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/product">產品列表</router-link> |
    <router-link to="/about">關於我們</router-link> |
    <router-link to="/blog">分享專區</router-link> |
    <router-link to="/form">團購專區</router-link> |
    <router-link to="/contact">聯絡我們</router-link>

  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  h3 {
    display: inline-block;
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
