<template>
  <nav>
    <div class="logoName">
      <font-awesome-icon :icon="['fas', 'utensils']" />
      <h3>Ptr Dessert</h3>
      <font-awesome-icon :icon="['fas', 'bread-slice']" />
    </div>
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
html, body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #383b3e;
  background-color: #bed1bd;
}

nav {
  background-color: #bed1bd;
  a {
    font-weight: bold;
    color: #383b3e;
    font-size: 1.2rem;

    &.router-link-exact-active {
      color: #9daf74;
    }
  }

  h3 {
    display: inline-block;
    padding-left: 20px;
    padding-right: 20px;
  }

  div.logoName {
    display: inline-block;
    padding: 0px 20px;
    margin-right: 20px;
    color: #9daf74;
    font-size: 1.2rem;
  }
}
</style>
