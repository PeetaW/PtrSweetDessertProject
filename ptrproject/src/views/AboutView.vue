<template>
  <div class="viewBox">
    <div class="infoContainers" v-bind:style="containerStyle">
      <div class="lobbyContainer room" v-for="image,id in images" v-bind:key="id">
        <h2>{{ image.name }}</h2>
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
        <div class="context">
          <p>{{ image.intro }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
      page: 1,
      images: [
        {
          name: '小舖介紹',
          image: 'image-store-intro.jpg',
          intro: '彼得甜點小舖不像典型的甜點工作室，更像是一個提供甜點的充電小棧。我們鼓勵你停下來稍作休憩，暫別紛擾，吃個甜點整裝後再出發。我們秉持著如山林般的理念，堅定佇立於此，溫柔地照顧每位旅人，極簡但不空虛，平靜卻又生機盎然，讓每位旅人都能暫且放下行囊或重擔，休息好後帶著滿滿能量，無所畏懼地踏上旅途繼續奮鬥。'
        },
        {
          name: '關於彼得小舖的一些故事',
          image: 'image-lobby-forest.jpg',
          intro: '歡迎你來到彼得小舖，很高興看到你願意多了解我們一點。'
        },
        {
          name: '甜點特色',
          image: 'image-cuisine-intro.jpg',
          intro: '我們提供清爽不死甜的各式甜點。我們希望藉由味覺帶給你如清風般拂過樹梢的輕盈感，由各式各樣不同風味外觀的食材，展示予你不同時刻下的風景。簡單回歸本質，期許能成為你平靜的中途站，分享喜悅能源的開端。'
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
  watch: {
    page (newPage) {
      if (newPage === 2) {
        $('div.rightDirection').hide()
      } else if (newPage === 0) {
        $('div.leftDirection').hide()
      } else {
        $('div.rightDirection').show()
        $('div.leftDirection').show()
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
  vertical-align: top;
}

div.viewBox {
  width: 100%;
  overflow: hidden;
}

div.infoContainers {
  white-space: nowrap;
}

div.lobbyContainer {
  width: 100%;
  display: inline-block;
}

div.lobbyImage {
  position: relative;
}

img {
  height: 70vh;
  width: 90%;
  object-fit: cover;
  margin: 0 auto;
  position: relative;
  border-radius: 30px;
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
  padding: 5px 12px;
  background-color: #698C88;
  transition:cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.3s;
  cursor: pointer;
  font-family: "Noto Sans TC", serif;
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

div.context {
  width: 90%;
  white-space: normal;
  font-size: 1.5rem;
  margin: 10px auto;
  padding: 20px 0;
  color: #383b3e;
  font-family: "LXGW WenKai TC", serif;
}

h2 {
  color: #698C88;
  font-family: "Noto Sans TC", serif;
  font-size: 2rem;
}

@media screen and (max-width: 600px) {
  div.leftDirection{
    left: 30%;
    bottom: 0;
  }
  div.rightDirection{
    right: 10%;
    bottom: 0;
  }
}
</style>
