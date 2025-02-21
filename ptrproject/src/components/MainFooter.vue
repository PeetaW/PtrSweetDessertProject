<template>
  <footer>
    <div class="left">
      <ul>
        <li><a href="#">Product List</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div class="right">
      <div class="logo">Ptr Dessert
      <p>統編 12345678</p>
      <hr>
      </div>
      <a href="#">FAQ/常見問題</a>
      <div class="linkBox">
        <div class="facebookIcon"><font-awesome-icon :icon="['fab', 'facebook']" /></div>
        <div class="instagramIcon"><font-awesome-icon :icon="['fab', 'square-instagram']" /></div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter'
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=LXGW+WenKai+Mono+TC&family=LXGW+WenKai+TC&family=Playwrite+GB+S+Guides:ital@0;1&display=swap');

* {
  // border: solid 1px black;
  font-family: "LXGW WenKai TC", serif;
}

footer {
  display: flex;
  background-color: #698c88;
}

div.left, div.right{
  width: 50%;
  min-height: 40vh;
}

div.left {
  display: flex;
  justify-content: center;
  ul {
    margin: auto 0;
  }
  li {
    list-style: none;
    margin: 15px 0;
    a {
      font-size: 1.2rem;
      text-decoration: none;
      color: inherit;
      transition:cubic-bezier(0.19, 1, 0.22, 1) 0.5s;
      &:hover {
        color:#9daf74;
        text-decoration: underline;
      }
    }
  }
}

div.right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  div.logo{
    font-size: 1.5rem;
    font-weight: bold;
    hr {
      border-color: #a9b8cb;
    }
    p {
      font-size: 0.9rem;
      color: #383b3e;
      font-weight: normal;
    }
  }
  a{
    text-decoration: none;
    color: inherit;
    transition:cubic-bezier(0.19, 1, 0.22, 1) 0.5s;
    &:hover {
      color: #9daf74;
      text-decoration: underline;
    }
  }
  div.linkBox {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 2rem;
    div.facebookIcon, div.instagramIcon {
      transition:cubic-bezier(0.19, 1, 0.22, 1) 0.5s;
      &:hover {
        color:#9daf74;
      }
    }
  }
}
</style>
