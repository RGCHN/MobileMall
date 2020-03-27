<template>
<div id="profile">
    <nav-bar class="nav-bar"><div slot="mid">我的商城</div></nav-bar>
    <user-info></user-info>
    <list-view :list-data="orderList" class="order-list"></list-view>
    <list-view :list-data="serviceList" class="service-list"></list-view>
    </div>
</template>

<script>
   import NavBar from "../../components/common/navbar/NavBar";
   import UserInfo from "./childComps/UserInfo";
   import ListView from "./childComps/ListView";

   export default {
       name: "Profile",
       components:{NavBar,UserInfo,ListView},
       data(){
           return {
               orderList:[
                   '我的订单',
                   {icon: require('@/assets/img/profile/pay.svg'), info: '待付款'},
                   {icon: require('@/assets/img/profile/pay.svg'), info: '待发货'},
                   {icon: require('@/assets/img/profile/pay.svg'), info: '待收货'},
                   {icon: require('@/assets/img/profile/pay.svg'),info:'退款售后'}
               ],
               serviceList:[
                   '我的应用',
                   {icon: require('@/assets/img/profile/pay.svg'), info: '待付款'},
                   {icon: require('@/assets/img/profile/pay.svg'), info: '待发货'},
                   {icon: require('@/assets/img/profile/pay.svg'), info: '待收货'},
                   {icon: require('@/assets/img/profile/pay.svg'),info:'退款售后'}
               ],
           }
       }
  }
</script>

<style scoped>
    .nav-bar{
        background-color: var(--color-tint);
        color: #ffffff;
        font-weight: 700;
    }



</style>
