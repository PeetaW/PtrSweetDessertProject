<template>
  <div class="container">
   <div class="topImage"></div>
   <div class="bottomContent">
     <h2 class="title">五味的生活，以甜味作引</h2>
     <p class="content">生活，充滿著各種味道。成長，留下的不只是雋永的記憶，還有隨著歷練增長一起熟成出來的，逐漸豐富的風味。而將這些風味萃取出來，便可匯成一篇篇的故事。<br><br>剛踏入醫藥研究時，每個實驗都像是發現了一個新世界，每次的失敗雖然感到懊惱沮喪，但經過無數次的碰壁後，成功的那一瞬間，那份衝勁與喜悅，總能讓我對後續偌大的難題都甘之如飴。<br><br>幾乎每天都作為最後離開實驗室的我，早已習慣了關燈、鎖門的步調。走向停車場的路途，是我少數能將思緒從工作中抽離的時光，然而抽開後才發現自己宛如一具枯木空殼。檢視自己的成長與未來，迎面襲來的是滿載而空泛的苦悶與空白。對比於忙碌的工作，是無盡的空虛感。<br><br>早晨急急忙忙地出門，胡亂抓個幾樣吐司蛋餅裹腹，深夜下班時城市早已睡下，路上只剩稀疏的人影與濃情密意的情侶在遊蕩。單獨穿梭在大街小巷，總在不經意間泛起鼻酸。<br><br>尤其碰上了老一輩的擔憂，總是藏在那一句句攻擊性的話語後面，「你做成這樣是能撐多久?」「阿你是賺了多少錢?」「做到流汗，嫌到流涎!」要不是經過了幾年的進修修行，這宛如摻了辣豆瓣的糖醋魚，嗆辣中又帶點酸甜的滋味還真是讓人難以下嚥。<br><br>「你要不要考慮出來外面看看?」經過長久的工作洗禮致使我染上了用吃糖來洩恨的惡習。某次與朋友一起吃著提拉米蘇聊彼此近況時，我把抱怨以及對未來的恐懼一股腦地傾倒出來後，朋友語重心長地給出這句。倏地一愣，驚覺不知不覺中我的眼界被限縮的極小。想起以前那雖然害怕但仍願意勇敢嘗試的自己，再想回這句忠告，不知怎地，好像又有點勇氣了。也許是因為糖暈吧?<br><br>甜味，可以使人感到愉悅，也能讓人補充能量，如今，它還能讓我在面對未知時，多了一丁點衝勁。每當徬徨害怕時，讓甜味做個引子，好像就沒那麼可怕了呢。
     </p>
   </div>
  </div>
 </template>
 
 <script>
 export default {
   name: 'Story2Detail',
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
   background-image: url('../assets/image/image-story-2.jpg');
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
 