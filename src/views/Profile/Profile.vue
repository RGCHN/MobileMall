<template>
<div id="profile">
    <nav-bar class="nav-bar"><div slot="mid">我的商城</div></nav-bar>
    <user-info></user-info>
</div>
</template>

<script>
   import NavBar from "../../components/common/navbar/NavBar";
   import UserInfo from "./childComps/UserInfo";
   export default {
   name: "Profile",
   components:{NavBar,UserInfo}
  }
</script>

<style scoped>
    .nav-bar{
        background-color: var(--color-tint);
        color: #ffffff;
        font-weight: 700;
    }



</style>
