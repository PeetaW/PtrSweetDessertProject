<template>
  <div class="carousel-container">
    <div class="carousel">
      <div class="carousel-item">A</div>
      <div class="carousel-item">B</div>
      <div class="carousel-item">C</div>
      <div class="carousel-item">D</div>
    </div>
    <div class="carousel">
      <div class="carousel-item">A</div>
      <div class="carousel-item">B</div>
      <div class="carousel-item">C</div>
      <div class="carousel-item">D</div>
    </div>
    <div class="carousel">
      <div class="carousel-item">A</div>
      <div class="carousel-item">B</div>
      <div class="carousel-item">C</div>
      <div class="carousel-item">D</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCarousel'
}

</script>

<style lang="scss" scoped>
* {
  border: solid 1px black;
}

@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

div.carousel-container {
  margin: 0 auto;
  width: 1000px;
  display: flex;
  overflow: hidden;
  position: relative;
  &:hover div.carousel {
    animation-play-state: paused;
  }
  &::before {
    content: "";
    position: absolute;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
    top: 0;
    left: 0;
    z-index: 2;
    width: 200px;
    height: 100%;
  }
  &::after {
    content: "";
    position: absolute;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
    top: 0;
    right: 0;
    z-index: 2;
    width: 200px;
    height: 100%;
  }
}

div.carousel {
  display: flex;
  min-height: 250px;
  min-width: 1200px;
  animation: 5s slide linear infinite;
  gap: 40px;
  padding-right: 40px
}

div.carousel-item {
  width: 100%;
  min-height: 250px;
  font-size: xx-large;
}

</style>
