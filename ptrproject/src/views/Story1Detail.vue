<template>
  <div class="container">
   <div class="topImage"></div>
   <div class="bottomContent">
     <h2 class="title">一切的起源，網站的濫觴</h2>
     <p class="content">午後，窗外的陽光零零散散的撒在木桌上，我一邊吃著甜點，一邊思索著side project要做什麼好。無奈這時腦中安定且祥和，只得試圖任由思緒發散。<br><br>目光漫無目的地游移，突然停在了附近幾桌的顧客身上。一位顧客滿眼放光的盯著桌上的甜點，喜孜孜地挖起一勺送入口中，撫著臉頰歪頭45度角，隨之眼睛笑得瞇成了彎月，頭一遭發現甜點的味道竟可以如此具體；另一桌則是兩位入座，互相分享著彼此近況，從職場到職涯，從單身的惶恐到有伴侶的不滿，時而捧腹大笑，時而激動地握拳抱怨，偶爾講得累了補一口熱量再繼續，手上握著的彷彿不是叉子，而是情緒的指揮棒。<br><br>盯回眼前沾著奶油痕跡的盤子，此情此景像極了當年日劇《深夜食堂》。劇中老闆總是親切地接待每位顧客，靜靜聽著每位顧客分享著不同的故事或是情緒，不做評論也不會過度帶入情境，卻將他心底的關懷與力量融入在每道料理裡面，讓人感到溫暖甚至鼓勵。顧客與老闆之間，那份信任感與安全感，舒適而堅固。<br><br>「也許我能嘗試將網站做成這樣的感覺吧。」我暗自思忖著，像《深夜食堂》那樣，甜點只是個媒介，重點是每個人的故事與感受，無論低落抑或高興，都能在這小小的角落中找到片刻的溫暖。<br><br>職人有云: 我有酒，你有故事嗎?<br><br>我想改成:我有甜點，來聽聽你的故事吧!
     </p>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Story1Detail'
}
</script>

<style lang="scss" scoped>
div.container{
  display: block;
  margin: 0 auto;
  width: 800px;
}

div.topImage{
   width: 800px;
   height: 400px;
   background-image: url('../assets/image/image-story-1.jpg');
   background-size: cover;
   background-position: center;
}

div.bottomContent{
   h2, p{
     font-family: "LXGW WenKai Mono TC", serif;
   }
   p.content{
     white-space: normal;
     line-height: 2.5em;
     margin: 0;
     text-align: justify;
     font-size: 18px;
     margin-bottom: 20px;
   }
}

@media screen and (max-width: 768px) {
  div.container{
    width: auto;
    display: block;
    margin: 10px auto;
  }

  div.topImage{
    width: 600px;
    height: 500px;
    margin: 0 auto;
  }

  div.bottomContent{
    padding: 0 30px;
  }
}

@media screen and (max-width: 450px) {
  div.container{
    width: auto;
    display: block;
    margin: 10px auto;
  }

  div.topImage{
    width: 300px;
    height: 500px;
    margin: 0 auto;
  }

  div.bottomContent{
    padding: 0 30px;
  }
}
</style>
