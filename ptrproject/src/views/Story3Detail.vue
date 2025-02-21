<template>
  <div class="container">
   <div class="topImage"></div>
   <div class="bottomContent">
     <h2 class="title">醫藥科研的滋味?來一片苦甜巧克力吧</h2>
     <p class="content">「我是不是其實不會做實驗啊?」又一次實驗失敗後，看著失敗的data，懊惱地問出這個問題。聽說這是每個研究者都會經歷過至少一次的靈魂拷問。但如果問我是否真的喜歡做實驗，答案絕對是肯定的，儘管過程是極痛苦的。比較具體一點來形容的話，我會把它比喻成苦甜巧克力吧。我自己本身是不喜歡苦味的人，我認為為了生活去打拼，就已經很苦了，沒必要還要吃苦吧。苦甜巧克力有個特點，剛入口時一定會先嘗到苦味，隨著體溫漸漸將它融化，巧克力的香味會逐漸釋放出來，直至充滿鼻腔與口腔。接著當你逐漸適應苦味後，這時甜味才姍姍來遲。此時的甜味，恰好舒緩了濃厚的苦味，而苦味又讓甜味顯得不膩。清爽而舒適，張弛有度。<br><br>回到研究上，每當碰到些奇怪難題，或是找尋機轉時，總會經歷無數次失敗。甚至當以為找到關鍵，信心十足地覺得這次肯定成功，就會迎來巨大的失落。然而隧道走久了總會迎來出口，雨天下久了總會迎來曙光，當真的獲得成功的實驗結果時，那份刻骨銘心的甜，終於來到了我的世界。其實放在很多方方面面的事情都是類似的，堅持的過程總是痛苦的，甚至折磨或是絕望的，但只要方向正確，總會迎來雨後的天青。
     </p>
   </div>
  </div>
 </template>

<script>
export default {
  name: 'Story3Detail'
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
  background-image: url('../assets/image/image-story-3.jpg');
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
</style>
