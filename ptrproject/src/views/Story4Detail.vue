<template>
  <div class="container">
   <div class="topImage"></div>
   <div class="bottomContent">
     <h2 class="title">跨領域的起心動念</h2>
     <p class="content">當我剛進入醫藥研究領域時，對於能將理論實際應用並創造新東西的興奮感，簡直是無法言喻。每天一醒來就迫不及待跑去實驗室，解決各種難題，開發新技術。即使一天工作超過12小時，完全不覺得累。這樣的投入讓我在檢錯和開發的能力上進步飛快。隨著經驗的增長，我也開始負責一些創新專案，甚至幫同事解決難題。每個專案都充滿挑戰，但每一次克服後，成就感和自信心也隨之提升。<br><br>當然，人生總是會遇到挑戰。尤其是當你貢獻越多，卻有些老闆會悄悄把你的成果藏起來，對外宣傳時卻少了你的份。雖然不必對每個成果都斤斤計較，但如果給予的比例差距太大，會讓你的履歷失去亮點，這樣也會影響你在職場上的競爭力。當然可以選擇與老闆對抗，但這樣的做法未必能帶來好處，甚至可能為自己帶來更多麻煩。<br><br>如今，台灣的生技產業面臨薪資偏低、成長空間小等問題。內需市場的侷限使得規模經濟難以發展，另外高風險和嚴格法規也讓開發週期拉長，資金募集也變得困難，這些因素都讓研發人才容易外流，產業也多以量產或檢測服務為主。相比之下，台灣的軟體科技領域發展快速，薪資範圍大，且隨著科技業的崛起和內需市場的成長，投資者對這個領域的信心十足，資金也更容易募集，開發週期也比較靈活，國際合作也變得更加容易。<br><br>在生技研發過程中，其實也少不了軟體科技的輔助。每次寫程式的時候，我都能夠體會到像是醫藥實驗一樣，解決問題的樂趣和成就感。雖然改變不了大環境，但我心想，何不趁自己還年輕、還有衝勁和體力的時候，試著把自己的道路走得更寬呢？我不知道終點會是什麼樣子，或許會失敗，或許會多繞一些路，但不管怎樣，這段過程肯定會讓我成長。那麼，為何不現在就開始嘗試呢？
     </p>
   </div>
  </div>
 </template>

<script>
export default {
  name: 'Story4Detail'
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
  background-image: url('../assets/image/image-story-4.jpg');
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
