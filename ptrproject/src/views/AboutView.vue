<template>
  <div class="lobbyContainer">
    <div class="lobbyImage">
      <img src="../assets/image/image-lobby-forest.jpg" alt="">
      <div class="leftDirection">
        <div class="leftTitle">小舖介紹</div>
        <div class="leftarrow"><font-awesome-icon :icon="['fas', 'arrow-left']" /></div>
      </div>
      <div class="rightDirection">
        <div class="rightTitle">甜點特色</div>
        <div class="rightarrow"><font-awesome-icon :icon="['fas', 'arrow-right']" /></div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
* {
  border: solid 1px black;
}

div.lobbyContainer {
  width: 100%;
  height: 90vh;
  position: relative;
}

img {
  height: 70vh;
  width: 90%;
  object-fit: cover;
  margin: 0 auto;
  position: relative;
}

div.leftDirection, div.rightDirection {
  display: inline-block;
  position: absolute;
}

div.leftDirection {
  left: 0;
  bottom: 0;
}
</style>
