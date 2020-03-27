<template>
    <div id="category">
        <nav-bar class="nav">
            <div slot="mid">商品分类</div>
        </nav-bar>
    </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  export default {
    name: "Category",
    components:{NavBar},
  }
</script>

<style scoped>
  .nav{
      color: #fff;
      font-weight: 700;
      background-color: var(--color-tint);
  }


</style>
