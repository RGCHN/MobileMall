<template>
    <div class="backTop">
        <img src="~assets/img/common/Top2.svg" alt="回到顶部">
    </div>
</template>

<script>
  export default {
    name: "backTop"
  }
</script>

<style scoped>
    .backTop img{
        position: fixed;
        right:10px;
        bottom:60px;
        z-index: 4;
        width:10%;
        height:10%;
    }
</style>
