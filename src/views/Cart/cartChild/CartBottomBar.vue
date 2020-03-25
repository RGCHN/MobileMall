<template>
  <div class="bottom-bar">
    <nav-bar>
      <div class="button" slot="left">
        <check-button></check-button>
        <span>全选</span>
      </div>

      <div class="total" slot="mid">
        合计:{{totalPrice}}
      </div>

      <div class="gocalc" slot="right">
        去计算
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import CheckButton from "./CheckButton";
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "CartBottomBar",
    components:{
      CheckButton,
      NavBar
    },
    computed:{
      totalPrice(){
        return '￥' + this.$store.state.cartList.filter(item =>{
          return item.checked
        }).reduce((pre,item) => {
          return item.price *item.count + pre
        },0).toFixed(2);
      }
    }
  }
</script>

<style scoped>
  .bottom-bar{
    position: relative;
    font-size: 14px;
    color:#888;
    padding-left: 5px;
    box-sizing: border-box;
  }
</style>