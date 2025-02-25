<template>
  <div class="container">
   <div class="topImage"></div>
   <div class="bottomContent">
     <h2 class="title">跑得累了?不妨吃個提拉米蘇再出發</h2>
     <p class="content">有時候，總會有那麼一刻，覺得自己已經拼盡全力，甚至燃燒殆盡，但依然無法得到理想的結果。沮喪與無力感，如潮水般一波接一波地襲來。這樣的情緒，或許是每個人都曾有過的經歷，尤其對於像我這樣總是對自己抱有高標準的人而言，這樣的心境更是家常便飯。輕度的挫折，經過一段時間的消化和調整後，往往能夠轉化為成長和進步，然而，有些人卻因為過度強迫自己，走向崩潰的邊緣，開始覺得自己一無是處，甚至漸漸養成了「間歇性凌雲壯志，常態性混吃等死」的心態。<br><br>從求學階段開始，我們就被教導要努力學習、考試，而考試中也總有唯一正確的答案。這樣的環境，讓我們潛移默化地接受了一個信念：只要努力，就一定能收穫。然而，現實告訴我們，世上的事並非非A即B，很多時候，努力並不一定會換來回報。就像拼命追求一段緣分，對方未必就會喜歡你；投資股票，股市也未必總是順利漲升；工作再努力加班，老闆未必會看見你的付出。過度追求那些自己無法控制的未來，並因此感到懊惱，無異於自我虐待。<br><br>然而，如果我們願意放慢腳步，給自己一些休息的時間，並客觀地回顧自己走過的路程，或許會發現，自己其實已經堅持了這麼久，走過了這麼遠的路。雖然理想的結果還未達成，但過程中的每一個小成功，早已累積起來，讓我們走到今天。現實從來沒有盡善盡美，也無法十全十美，有缺陷才是真實的樣子。進步、退步，甚至原地踏步，都是正常的。畢竟，我們每個人都是平凡的人，不必擔心自己追不上，也不必覺得自己不如他人。在自己生命的時區裡，若能找到屬於自己的平靜和快樂，那便足夠了。<br><br>提拉米蘇，在義大利語中的意思是「拉我一把」。當感到疲憊時，何不停下來，休息一會，吃個提拉米蘇，再出發呢？
     </p>
   </div>
  </div>
 </template>

<script>
export default {
  name: 'Story5Detail'
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
  background-image: url('../assets/image/image-story-5.jpg');
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
