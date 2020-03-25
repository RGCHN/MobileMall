<template>
  <div class="toast" v-show="visible" >
    {{message}}
  </div>
</template>

<script>
  export default {
    name: "toast",
    data(){
      return {
        visible:false,
        message:''
      }
    }
  }
</script>

<style scoped>
  .toast{
    position: fixed;
    left:50%;
    top:50%;
    background-color: rgba(0,0,0,0.75);
    color:#fff;
    transform: translate(-50%, -50%);
    font-size: 15px;
    z-index: 10;
    padding:15px;
  }
</style>