<template>
    <div id="hy-swiper">
        <div class="swiper">
            <slot></slot>
        </div>

        <slot name="indicator"></slot>

        <div class="indicator">
            <slot name="indicator" v-if="showIndicator">
                <div v-for="(item,index) in slideCount" class="indi-item"
                    :class="{active :index === currentIndex - 1}"
                    :key="index">

                </div>
            </slot>
        </div>
    </div>

</template>

<script>
  export default {
    name: "Swiper",
    props:{
      showIndicator:{
        type:Boolean,
        default:true
      }
    },
    data(){
      return {
        slideCount:0,
        totalWidth:0,
        currentIndex:1,
      }
    },
    mounted() {
      setTimeout(()=>{
        this.handleDom();
        this.startTimer();
      },100)
    },
    methods:{
      handleDom(){

      },
      startTimer(){

      },
    }
  }
</script>

<style scoped>
    #hy-swiper{
        overflow: hidden;
        position: relative;
    }
    .swiper{
        display: flex;
    }
    .indicator{
        display: flex;
        justify-content: center;
        position: absolute;
        width: 100px;
        bottom:8px;
    }
    .indi-item{
        box-sizing: border-box;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background-color: #fff;
        line-height: 8px;
        text-align: center;
        font-size: 12px;
        margin: 0 5px;
    }

    .indi-item .active{
        background-color: rgba(212,62,45,1.0);
    }
</style>
