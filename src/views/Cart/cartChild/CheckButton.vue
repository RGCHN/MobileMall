<template>
  <div class="check-button" @Click="itemClick">
    <img v-if="!isChecked" src="~assets/img/cart/unchecked.svg" alt="">
    <img v-else src="~assets/img/cart/checked.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props:{
      isChecked:{
        type:Boolean,
        default(){
          return true
        }
      }
    },
    data(){
      return {
        checked:this.isChecked
      }
    },
    methods:{
      itemClick(){
        this.$emit('checkBtnClick')
      }
    }
  }
</script>

<style scoped>
  .check-button{
    position: relative;
    margin:0;
    width:18px;
    height: 18px;
  }
  .check-button img{
    width: 25px;
    height: 25px;
  }

</style>