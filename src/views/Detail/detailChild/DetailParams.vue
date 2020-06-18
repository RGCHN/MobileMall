<template>
    <div class="params" v-if="Object.keys(goodsParams).length !== 0">
        <table v-for="(sizes,index1) in goodsParams.sizes" :key="index1"
                class="info-size">
            <tr v-for="(name,index2) in sizes" :key="index2">
                <td v-for="(item,index3) in name" :key="index3">{{item}}</td>
            </tr>
        </table>
        <table class="info-param">
            <tr v-for="(info,index4) in goodsParams.infos" :key="index4">
                <td class="param-key">{{info.key}}</td>
                <td class="param-value">{{info.value}}</td>
            </tr>
        </table>
        <div class="info-img" v-if="goodsParams.image.length !== 0">
            <img :src="goodsParams.image" alt="" @load="imgLoad">
        </div>
    </div>
</template>

<script>
  import {debounce} from "../../../Utils/utils";

  export default {
    name: "DetailParams",
    props:{
      goodsParams:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imgLoad(){
        debounce(()=>{
          this.$emit('paramsLoad',1)
        },50)
      }
    }
  }
</script>

<style scoped>
    .params{
        padding:20px 15px;
        font-size: 14px;
        border-bottom: 5px solid #f2f5f8;
    }
    .params table{
        width: 100%;
        border-collapse: collapse;
    }
    .params table tr{
        height: 42px;
    }
    .params table tr td{
        border-bottom: 1px solid rgba(100,100,100,0.1);
    }
    .param-key{
        width: 95px;
    }
    .info-param{
        border-top:1px solid rgba(0,0,0,0.1);
    }
    .param-value{
        color:#eb4868;
    }
    .info-img img{
        width:100%;
    }



</style>
