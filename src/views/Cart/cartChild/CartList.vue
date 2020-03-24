<template>
  <div class="cart-list">
    <scroll class="content">
      <cart-list-item v-for="(item,index) in list" :key="index" :product="item"/>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  import CartListItem from "./CartListItem";
  export default {
    name: "CartList",
    components:{Scroll,CartListItem},
    props:{
      list:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .cart-list{
    position: relative;
    height: 100%
  }
  .content{
    height: calc(100% - 93px);
    overflow: hidden;
  }

</style>