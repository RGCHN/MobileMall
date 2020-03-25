<template>
  <div class="check-button" @click="itemClick">
      <img v-if="!isChecked" src="~assets/img/cart/unchecked.svg" alt="">
      <img v-else src="~assets/img/cart/checked.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props:{
      isChecked:{
        type:Boolean
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
    },
  }
</script>

<style scoped>
  .check-button{
    position: relative;
    margin:0;
    width:25px;
    height: 25px;
  }
  .check-button img{
    width: 25px;
    height: 25px;
  }

</style>