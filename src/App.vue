<template>
    <div class="app">
        <keep-alive exclude="Detail">
            <router-view/>
        </keep-alive>
        <main-tab-bar/>
    </div>
</template>

<script>
import MainTabBar from "./components/content/MainTabBar/MainTabBar";

export default {
  name: 'App',
  components: {
    MainTabBar
  },
 /* created(){
    this.$router.push("/home");
  }*/
}
</script>

<style>
    @import "assets/css/base.css";
</style>
