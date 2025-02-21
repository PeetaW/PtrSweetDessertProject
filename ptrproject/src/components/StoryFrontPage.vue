<template>
  <div class="container" v-for="article,id in allArticles" :key="id">
    <Router-link :to="`/story/story-${id + 1}`" class="customLink">
      <div class="topImage" :style="{ backgroundImage: `url('${require(`@/assets/image/${article.image}`)}')` }">
        <div class="title">
          <p>{{ article.title }}</p>
        </div>
      </div>
      <div class="bottomContent">
        <p>{{ article.content }}</p>
        <button>繼續閱讀</button>
      </div>
    </Router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'StoryFrontPage',
  computed: {
    ...mapGetters(['allArticles'])
  }
}
</script>

<style lang="scss" scoped>
*{
  // border: solid 1px black;
  position: relative
}

div.container{
  width: 300px;
  height: 500px;
  margin: 30px 20px;
  display: inline-block;
  box-shadow: 2px 5px 15px #698C88;
  cursor: pointer;
  transition: cubic-bezier(.51,.47,.33,.84) 0.2s;
  &:hover{
    transform: scale(1.05);
    button{
      color: #9DAF75;
    }
  }
}

div.topImage{
  width: 100%;
  height: 70%;
  // background-image: url('../assets/image/image-story-1.jpg');
  background-position: 30% 0%;
  background-size: cover;
}

div.bottomContent{
  // width: 100%;
  // height: 30%;
  padding: 10px;
  font-family: "LXGW WenKai TC", serif;
  p{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-clamp: 5;
  -webkit-line-clamp: 5;
  overflow: hidden;
  margin:0;
  }
  button{
    border: none;
    background-color: transparent;
    font-size: 1rem;
    position: absolute;
    right: 0;
    margin: 0px 5px;
    text-decoration: underline;
    color: #698C88;
    font-family: "LXGW WenKai TC", serif;
  }
}

div.title{
  width: 50px;
  // height: 280px;
  padding: 5px;
  position: absolute;
  top: 50%;
  left: 15%;
  transform: translateX(-50%) translateY(-50%);
  background-color: rgba(192, 210, 189, 0.4);
  p{
    writing-mode: vertical-lr;
    text-orientation: upright;
    margin: 0 auto;
    font-family: "LXGW WenKai Mono TC", serif;
    font-size: 1.3rem;
  }
}

.customLink{
  text-decoration: none;
  color: inherit;
  &:hover{
    color: inherit;
    text-decoration: none;
  }
  &:focus{
    color: inherit;
    text-decoration: none;
  }
  &:active{
    color: inherit;
    text-decoration: none;
  }
}
</style>
