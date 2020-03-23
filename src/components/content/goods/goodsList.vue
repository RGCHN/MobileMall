<template>
    <div class="goods">
      <goods-item v-for="(item,index) in goodsList" :goods-item="item" :key="index"/>
    </div>
</template>

<script>
    import goodsItem from "./goodsItem";
  export default {
    name: "goodsList",
    components:{goodsItem},
    props:{
      goodsList:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
    .goods{
        /*wrap属性会根据子元素宽度设置一行显示几个*/
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 2px;
    }


</style>
