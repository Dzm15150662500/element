<template>
  <div id="app">
    <mt-tabbar>
      <mt-tab-item id="tab1">
        <img  class="one" slot="" src="./assets/饿了么.png">
        <router-link tag="h1" to="/home">外卖</router-link>
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <img class="one" slot="" src="./assets/饿了么.png">
        <router-link tag="h1" to="/live">生活</router-link>
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <img class="one" slot="" src="./assets/饿了么.png">
        <router-link tag="h1" to="/indent">订单</router-link>
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <img class="one" slot="" src="./assets/饿了么.png">
        <router-link tag="h1" to="/my">我的</router-link>
      </mt-tab-item>
    </mt-tabbar>
    <router-view></router-view>
  </div>
  
    </template>
   <script>
     export default {
       name:'App',
       components:{
         
       }
     }
        </script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.mint-tab-item-label h1{
  font-size: 16px;
  text-decoration:none;
  color:#484848;
}

.mint-tab-item-label h1.router-link-active{
   color:#1296db;
   }

  .one{
     position: relative;
     bottom: 0.7rem;
     width: 3rem;
     height: 3rem;
   }

   .mint-tabbar{
     position: fixed !important;
   }
</style>