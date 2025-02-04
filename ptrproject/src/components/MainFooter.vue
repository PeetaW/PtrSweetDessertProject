<template>
  <footer>
    <div class="left">
      <ul>
        <li><a href="#">Product List</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Order form</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div class="right">
      <div class="logo">Ptr Dessert</div><hr>
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
* {
  border: solid 1px black;
}

footer {
  display: flex;
}

div.left, div.right{
  width: 50%;
  min-height: 40vh;
}
</style>
