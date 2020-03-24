<template>
    <div class="d-tabbar">
       <div class="bar-item left">
           <div>
               <img src="~img/detail/server.png">
               <span class="text">客服</span>
           </div>
           <div>
               <img src="~img/detail/shop.png">
               <span class="text">店铺</span>
           </div>
           <div @click="changeActive">
               <img src="~img/detail/collect.png" v-if="!this.active">
               <img src="~img/detail/collect_active.png" v-else>
               <span class="text">收藏</span>
           </div>
       </div>

        <div class="bar-item right">
            <div class="cart" @click="addToCart">加入购物车</div>
            <div class="buy">购买</div>
        </div>
    </div>
</template>

<script>
    export default {
    name: "DetailTabBar",
    data(){
      return {
        active:false,
      }
    },
    methods:{
      addToCart(){
        this.$emit('addToCart')
      },
      changeActive(){
        this.active = !this.active
      }
    }

  }
</script>

<style scoped>
    .d-tabbar{
        height: 58px;
        position: fixed;
        background-color: #ffffff;
        left: 0;
        right: 0;
        bottom:0;
        display: flex;
        text-align: center;
        z-index: 9;
    }
    .bar-item{
        flex: 1;
        display: flex;
    }
    .bar-item>div{
        flex:1;
    }
    .d-tabbar img{
        display: block;
        width:22px;
        height: 22px;
        margin:10px auto 3px;
    }
   .left .text{
       font-size: 15px;
   }

   .right{
       font-size: 15px;
       color: #fff;
       line-height: 58px;
   }

    .right .cart{
        background-color: #f0cc96;
        color: #333;
    }

    .right .buy{
        background-color: #eb4d4b;
    }

</style>
