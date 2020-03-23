<template>
    <div class="baseInfo" v-if="Object.keys(goods).length !== 0">
        <div class="title">{{goods.title}}</div>
        <div class="price">
            <span class="new">{{goods.newPrice}}</span>
            <span class="old">{{goods.oldPrice}}</span>
            <span v-if="goods.discount" class="discount" :style="{backgroundColor: goods.discountBgColor}">{{goods.discount}}</span>
        </div>
        <div class="other-info">
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.columns[1]}}</span>
            <span>{{goods.services[goods.services.length - 1].name}}</span>
        </div>
        <div class="ser-info" v-if="goods.services">
            <span v-for="(item,index) in (goods.services.length>4 ? 4:goods.services.length)" :key="index">
                <img :src="goods.services[item -1].icon" alt="">
                <span>{{goods.services[item-1].name}}</span>
            </span>
        </div>
    </div>
</template>

<script>

  export default {
    name: "DetailBaseInfo",
    props:{
      goods:{
        type:Object,
        default() {
          return {}
        }
      },
    },
  }
</script>

<style scoped>
    .baseInfo{
        margin-top:15px;
        padding:0 8px;
        color:#999;
        border-bottom:5px solid #f2f5f8;
    }
    .title{
        color:#222;
    }
    .price{
        margin-top: 10px;
    }
    .price .new{
        font-size: 24px;
        color:var(--color-high-text);
    }
    .price .old{
        font-size: 13px;
        margin-left: 5px;
        text-decoration: line-through;

    }
    .price .discount{
        font-size:12px;
        padding-right:3px;
        color:#fff;
        border-radius: 4px;
        margin-left: 5px;
        position:relative;
        top:-8px;
    }
    .other-info{
        margin-top:15px;
        line-height: 30px;
        display: flex;
        font-size:13px;
        border-bottom: 1px solid rgba(100,100,100,0.1);
        justify-content: space-between;
    }

    .ser-info{
        display: flex;
        justify-content: space-between;
        line-height: 60px;
    }
    .ser-info img{
        width: 12px;
        height: 12px;
        position: relative;
        top:2px;
    }
    .ser-info span{
        font-size: 12px;
        color:#333;
    }


</style>