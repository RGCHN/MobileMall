<template>
   <div class="cart">
      <!--导航-->
      <nav-bar class="cart-nav">
         <div slot="mid">购物车({{cartLength}})</div>
      </nav-bar>
      <!--列表-->
      <scroll class="cart-list">
         <cart-list-item v-for="(item,index) in cartList" :key="index" :product="item"/>
      </scroll>
      <!--底部汇总-->
      <cart-bottom-bar class="bottom-bar"/>
   </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import CartBottomBar from "./cartChild/CartBottomBar";
  import CartListItem from "./cartChild/CartListItem";
  import Scroll from "../../components/common/scroll/Scroll";
  import {mapGetters} from 'vuex';
  export default {
     name: "Cart",
     components:{NavBar,CartBottomBar,Scroll,CartListItem},
     computed:{
        ...mapGetters([
           'cartList','cartLength',
        ])
        /* ...mapGetters({
            length:'cartLength'
         })*/
     },

  }
</script>

<style scoped>
   .cart-nav{
      background-color: var(--color-tint);
      color: #fff;
      font-weight: 700;
   }
   .cart{
      height: 100vh;
   }

   .cart-list{
      overflow: hidden;
      /*height: calc(100% - 135px);*/
      position: absolute;
      top: 44px;
      bottom: 49px;
      width: 100%;
   }
   .bottom-bar{
      position:fixed;
      right: 0;
      left:0;
      bottom:49px;
      z-index:3;
      background-color: #fff;
   }



</style>
