<template>
    <swiper>
        <!--banners中有几个数据 就有几个swiperItem-->
        <swiper-item v-for="(item,index) in banners" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="" @load="imgLoaded">
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: "HomeSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        isLoad:false
      }
    },
    methods:{
      imgLoaded(){
        if(!this.isLoad){
          this.$emit('swipeImgLoad');
          this.isLoad = true;
        }
      }
    }

  }
</script>

<style scoped>

</style>
