<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="mid"><slot name="mid"></slot></div>
        <div class="rig"><slot name="rig"></slot></div>
    </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
    .nav-bar{
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align: center;
        box-shadow: 0 1px 1px rgba(100,100,100,0.1);
    }
    .left,.rig{
        width: 60px;
    }
    .mid{
        flex: 1;
    }
</style>
