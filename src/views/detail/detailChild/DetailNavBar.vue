<template>
    <div class="detailNavBar">
        <nav-bar>
            <div slot="left" class="back" @click="backClick">
                <img src="~assets/img/common/back.svg" alt="back">
            </div>
            <div slot="mid" class="navTitle">
                <div v-for="(item,index) in navTitle" :key="index" class="titleItem"
                    :class="{active:currentIndex === index}" @click="itemClick(index)">
                    {{item}}
                </div>
            </div>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "dNavBar",
    components:{NavBar},
    data(){
      return {
        navTitle:["商品","参数","评论","推荐"],
        currentIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index;
        this.$emit('titleClick',index);
      },
      backClick(){
        this.$router.go(-1);
      },
    }
  }
</script>

<style scoped>
    .navTitle{
        display:flex;
        margin-left: 10px;
    }
    .titleItem{
        flex:1;
        justify-content: center;
        font-size:14px;
    }
    .titleItem.active{
        color:var(--color-tint);
    }
    .back img{
      margin-top:10px;
    }


</style>
