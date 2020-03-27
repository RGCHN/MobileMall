<template>
  <div class="list">
    <div class="list-title">
      {{getTitle}}
    </div>

    <div class="list-item">
      <div class="item"  v-for="(item,index) in getItem" :key="index">
        <div>
          <img :src="item.icon" alt="">
        </div>
        <div class="info">{{item.info}}</div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "ListView",
    props:{
      ListData:{
        type:Array,
        default(){
          return []
        }
      },
      title:{
        type:String,
        default(){
          return ''
        }
      }
    },
    computed:{
      getTitle(){
        return this.ListData[0];
      },
      getItem(){
        return this.ListData.slice(1)
      }

    }
  }
</script>

<style scoped>
  .list{
    background-color: #fff;
    font-size: 15px;
    color: #333;
    margin-bottom:10px;
    border-top: 5px solid rgba(100,100,100,0.1)
  }

  .list-title{
    line-height: 15px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    padding:10px;
    font-size: 15px;
  }

  .list-item{
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin: 10px 15px;
    font-size: 13px;
  }

  .list-item img{
    width: 40px;
    height: 40px;
  }







</style>