<template>
    <div class="shop">
        <div class="shopLogo">
            <img :src="shop.logo" alt="">
            <span class="shopname">{{shop.name}}</span>
        </div>
        <div class="content">
            <div class="sale-info">
                <div class="total-sell">
                    <div class="sell-num">
                        {{shop.sells | sellCountFilter}}
                    </div>
                    <div class="sell-text">总销量</div>
                </div>
                <div class="total-goods">
                    <div class="goods-num">
                        {{shop.goodsCount}}
                    </div>
                    <div class="goods-text">全部宝贝</div>
                </div>
            </div>
            <div class="score-info">
                <table>
                    <tr v-for="(item ,index) in shop.score" :key="index">
                        <td>{{item.name}}</td>
                        <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
                        <td class="value" :class="{'higher':item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="shop-bottom">
            <div class="enter-shop">进店逛逛</div>
        </div>
    </div>
</template>

<script>

  export default {
    name: "DetailShopInfo",
    props:{
      shop:{
        type:Object,
        default(){
          return {}
        }
      },
    },
    filters:{
      sellCountFilter(value){
        return (value<10000 ? value:(value/10000).toFixed(1) + '万');
      },
    }
  }
</script>


<style scoped>
    .shop{
        padding:25px 8px;
        border-bottom: 5px solid #f2f5f8;
    }
    .shopLogo{
        padding-left: 25px;
        line-height: 45px;
        display: flex;
        align-items: center;
    }
    .shopLogo img{
        height: 45px;
        width: 45px;
        border-radius: 50%;
        border:1px solid rgba(0,0,0,0.1);
    }
    .shopLogo .shopname{
        margin-left: 15px;
        vertical-align: center;

    }
    .content{
        margin-top:15px;
        display: flex;
        align-items: center;
    }
    .sale-info{
        display:flex;
        justify-content: space-evenly;
        text-align: center;
        color:#333;
        border-right: 1px solid rgba(0,0,0,0.1);
        flex:1;
    }
    .sell-num, .goods-num{
        font-size: 18px;
    }
    .sell-text, .goods-text{
        margin-top:10px;
        font-size: 12px;
    }
    .score-info{
        font-size: 13px;
        color:#333;
        flex:1;
    }
    .score-info table{
        width: 120px;
        margin-left: 30px;
    }
    .score-info table td{
        padding:5px 0;
    }
    .score-info .score{
        color:#5ea732
    }
    .score-info .score-better{
        color:#f13e3a;
    }
    .score-info .score-better span{
        background-color: #5ea732;
        color: #fff;
        text-align: center;
    }
    .score-info .value{
        color:#fff;
    }
    .score-info .value span{
        background-color: #5ea732;
    }
    .score-info .higher span{
        background-color: #f13e3a;
    }
    .shop-bottom{
        text-align: center;
        margin-top: 10px;
    }
    .enter-shop{
        display: inline-block;
        font-size: 14px;
        background-color: #f2f5f8;
        width: 150px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border-radius: 10px;
    }


</style>