<template>
  <div class="viewBox">
    <div class="infoContainers" v-bind:style="containerStyle">
      <div class="lobbyContainer room" v-for="image,id in images" v-bind:key="id">
        <div class="lobbyImage">
          <img v-bind:src="require(`@/assets/image/${image.image}`)" alt="">
          <div class="leftDirection" v-on:click="turnLeft">
            <div class="leftTitle">小舖介紹</div>
            <hr>
            <div class="leftarrow"><font-awesome-icon :icon="['fas', 'arrow-left']" /></div>
          </div>
          <div class="rightDirection" v-on:click="turnRight">
            <div class="rightTitle">甜點特色</div>
            <hr>
            <div class="rightarrow"><font-awesome-icon :icon="['fas', 'arrow-right']" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'

export default {
  data () {
    return {
      page: 1,
      images: [
        {
          name: 'Store intro',
          image: 'image-store-intro.jpg'
        },
        {
          name: 'Lobby forest',
          image: 'image-lobby-forest.jpg'
        },
        {
          name: 'Cuisine intro',
          image: 'image-cuisine-intro.jpg'
        }
      ]
    }
  },
  computed: {
    containerStyle () {
      return {
        transform: `translateX(${-this.page * 100}%)`,
        transition: 'ease-in-out 0.5s'
      }
    }
  },
  methods: {
    turnRight () {
      if (this.page < this.images.length - 1) {
        this.page += 1
      }
    },
    turnLeft () {
      if (this.page > 0) {
        this.page -= 1
      }
    }

  }
}
</script>

<style lang="scss" scoped>
* {
  // border: solid 1px black;
}

div.viewBox {
  width: 100%;
  height: 90vh;
  border: solid 1px black;
  overflow: hidden;
  // &:hover div.infoContainers {
  //   transform: translateX(-100%);
  // }
}

div.infoContainers {
  white-space: nowrap;
  transition: linear 1s;
}

div.lobbyContainer {
  width: 100%;
  height: 90vh;
  display: inline-block;
}

div.lobbyImage {
  // border: solid 1px red;
  position: relative;
}

img {
  height: 70vh;
  width: 90%;
  object-fit: cover;
  margin: 0 auto;
  position: relative;
}

hr {
  margin: 0;
  border-color: #AAB9CC;
  transition:cubic-bezier(0.39, 0.575, 0.565, 1) 0.5s;
}

div.leftDirection, div.rightDirection {
  display: inline-block;
  position: absolute;
  border-radius: 5px;
  transform: translateX(-50%) translateY(50%);
  background-color: #698C88;
  transition:cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.3s;
  cursor: pointer;
  font-size: 1.3rem;
  &:hover {
    background-color: #AAB9CC;
    hr {
      border-color: #698C88;
    }
  }
}

div.leftDirection {
  left: 33%;
  bottom: 0;
}

div.rightDirection {
  right: 33%;
  bottom: 0;
}
</style>
