<template>
   <div class="cart">
      <!--导航-->
      <nav-bar class="cart-nav">
         <div slot="mid">购物车({{cartLength}})</div>
      </nav-bar>

      <!--列表-->
      <cart-list :list="cartList"/>
      <!--底部汇总-->

   </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import CartList from "./cartChild/CartList";

  import {mapGetters} from 'vuex';
  export default {
      name: "Cart",
      components:{NavBar,CartList},
      computed:{
         ...mapGetters([
             'cartList','cartLength',
         ])
        /* ...mapGetters({
            length:'cartLength'
         })*/
      }
  }
</script>

<style scoped>
   .cart-nav{
      background-color: var(--color-tint);
      color: #fff;
   }
   .cart{
      height: 100vh;
   }


</style>
