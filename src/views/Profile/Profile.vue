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
                   {icon: require('@/assets/img/profile/ready.svg'), info: '待发货'},
                   {icon: require('@/assets/img/profile/transport.svg'), info: '待收货'},
                   {icon: require('@/assets/img/profile/refund.svg'),info:'退款售后'}
               ],
               serviceList:[
                   '我的应用',
                   {icon: require('@/assets/img/profile/vip.svg'), info: '我的会员'},
                   {icon: require('@/assets/img/profile/collect.svg'),info:'我的收藏'},
                   {icon: require('@/assets/img/profile/discount.svg'), info: '最新优惠'},
                   {icon: require('@/assets/img/profile/wishes.svg'), info: '心愿单'},
                   {icon: require('@/assets/img/profile/freshsale.svg'),info:'抢购'},
                   {icon: require('@/assets/img/profile/recommend.svg'), info: '热门推荐'},
                   {icon: require('@/assets/img/profile/help.svg'),info:'帮助中心'},
                   {icon: require('@/assets/img/profile/download.svg'), info: 'App下载'},
                   {icon: require('@/assets/img/profile/about.svg'),info:'关于'},

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
