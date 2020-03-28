<template>
  <div class="slide-menu">
    <div class="menu-list">
      <div class="list-item"
           v-for="(item,index) in categories"
          :class="{active:index === currentIndex}"
           :key="index" @click="itemClick(index)">
        {{item.title}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SlideMenu",
    props:{
      categories:Array
    },
    data(){
      return {
        currentIndex :0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index;
        this.$emit('selectItem',index)
      }
    }
  }
</script>

<style scoped>
  .slide-menu{
    background-color: #f6f6f6;
    height: 100%;
    width: 100px;
    box-sizing: border-box;
  }

  .list-item{
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }

  .list-item.active{
    font-weight: 700;
    color: var(--color-high-text);
    background-color: #fff;
    border-left:3px solid var(--color-high-text);
  }

</style>