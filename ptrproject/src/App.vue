<template>
  <nav>
    <div class="logoName">
      <font-awesome-icon :icon="['fas', 'utensils']" />
      <h3>Ptr Dessert</h3>
      <font-awesome-icon :icon="['fas', 'bread-slice']" />
    </div>
    <router-link to="/">首頁</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/product">產品列表</router-link> |
    <router-link to="/about">關於我們</router-link> |
    <router-link to="/blog">分享專區</router-link> |
    <router-link to="/form">團購專區</router-link> |
    <router-link to="/contact">聯絡我們</router-link>

  </nav>
  <router-view/>
  <div class="footer">
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import MainFooter from '@/components/MainFooter.vue'
export default {
  name: 'App',
  components: {
    MainFooter
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Chocolate+Classical+Sans&family=LXGW+WenKai+Mono+TC&family=LXGW+WenKai+TC&family=Noto+Sans+TC:wght@100..900&family=Playwrite+GB+S+Guides:ital@0;1&display=swap');

html, body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Noto Sans TC", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #383b3e;
  background-color: #bed2bd;
}

nav {
  background-color: #bed2bd;
  a {
    font-weight: bold;
    color: #698C88;
    font-size: 1.2rem;

    &.router-link-exact-active {
      color: #9DAF75;
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
