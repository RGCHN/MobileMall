<template>
    <div class="detail">
       <detail-nav-bar ref="nav" class="dNav" @NavClick="NavClick" :detail-index="NavIndex"/>
        <scroll class="content" ref="dScroll" @scrollpos="scrollContent" :probe-type="3">
            <detail-swipe ref="base" :top-images="topImages" class="detail-swipe"></detail-swipe>
            <detail-base-info :goods="goods"/>
            <detail-shop-info :shop="shopInfo"/>
            <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad"/>
            <detail-params ref="params" :goods-params="paramInfo"/>
            <detail-comment ref="comment" :comments="commentInfo" ></detail-comment>
            <goods-list ref="recommend" :goods-list="recommends"></goods-list>
        </scroll>
        <back-top  @click.native="backToTop" v-show="showBackTop"/>
        <detail-tab-bar @addToCart="addToCart"/>
    </div>
</template>

<script>
  import DetailNavBar from "./detailChild/DetailNavBar";
  import DetailSwipe from "./detailChild/DetailSwipe";
  import DetailBaseInfo from "./detailChild/DetailBaseInfo";
  import DetailShopInfo from "./detailChild/DetailShopInfo";
  import DetailGoodsInfo from "./detailChild/DetailGoodsInfo";
  import DetailParams from "./detailChild/DetailParams";
  import DetailComment from "./detailChild/DetailComment";
  import DetailTabBar from "./detailChild/DetailTabBar";

  import backTop from "../../components/content/backTop/backTop";
  import goodsList from "components/content/goods/goodsList";
  import Scroll from "components/common/scroll/Scroll";
  import {getDetail,GoodsInfo,Shop,GoodsParam,getRecommend} from "../../network/detail";

  export default {
    name: "Detail",
    components:{DetailNavBar,DetailSwipe,DetailBaseInfo,DetailShopInfo,goodsList,DetailTabBar,
                backTop,Scroll,DetailGoodsInfo,DetailParams,DetailComment},
    data(){
      return {
        iid:'',
        topImages:[],//顶部轮播图
        goods:{},
        shopInfo:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
        recommends:[],
        showBackTop:false,
        TopYs:[0,0,0,0,0],
        NavIndex:0
      }
    },
    created() {
      //保存被点击的商品的id
      this.iid = this.$route.params.goodID;
      //发送网络请求 获取商品详细数据
      getDetail(this.iid).then(res => {
        //获取顶部轮播数据
        const data = res.result;
       this.topImages = data.itemInfo.topImages;
       //获取商品信息
       this.goods = new GoodsInfo(data.itemInfo,data.columns,data.shopInfo.services);
       //获取店铺信息
       this.shopInfo = new Shop(data.shopInfo);
        //获取商品参数信息
       this.detailInfo = data.detailInfo;
       //获取商品参数信息
       this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
        //获取商品评论信息
       if(data.rate.cRate !== 0){
         this.commentInfo = data.rate.list[0];
         //获取详情页推荐数据
        }
       });
      getRecommend().then( res => {
          this.recommends = res.data.list;
       });
    },
    methods:{
      addToCart(showMsg){
        const product = {};
        product.iid = this.iid;
        product.imgURL = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        if(showMsg){
          this.$store.dispatch('addCart',{product:product,checked:false}).then((res)=>{
            this.$Toast(res,2000);
          });
        }else{
          product.checked = true;
          this.$store.dispatch('addCart',{product:product,checked:true});
        }
      },
      backToTop(){
        this.$refs.dScroll.scrollTo(0,0);
      },
      contentScroll(position){
        this.showBackTop = Math.abs(position.y) > 2000;
      },
      getTopY(){
        this.TopYs = [];
        this.TopYs.push(this.$refs.base.$el.offsetTop);
        this.TopYs.push(this.$refs.params.$el.offsetTop);
        this.TopYs.push(this.$refs.comment.$el.offsetTop);
        this.TopYs.push(this.$refs.recommend.$el.offsetTop);
        this.TopYs.push(1e10);
        if(!this.TopYs[2]){
          this.TopYs[2] = this.TopYs[3] - 50;
        }
      },
      imgLoad(){
        this.$refs.dScroll.refresh();
        this.getTopY();
      },
      NavClick(index){
        this.NavIndex = index;
        if(this.TopYs[0] === 0){
          this.TopYs = this.TopYs.map((item) => {
            return item + 44
          });
        }
        this.$refs.dScroll.scrollTo(0,-this.TopYs[index]+44,0);
      },
      scrollContent(position){
        this.showBackTop = Math.abs(position.y) > 2000;
        let currentY = Math.abs(position.y) + 44;
        let len = this.TopYs.length;
        for(let i=0;i<len-1;i++){
          if(this.NavIndex !== i){
            if(currentY >= this.TopYs[i] && currentY < this.TopYs[i + 1]){
              this.NavIndex = i;
            }
          }
        }
      }
    },
  }
</script>

<style scoped>
    .detail{
        position: relative;
        z-index:9;
        background-color:#fff;
        height: 100vh;
    }
    .content{
        height: calc(100% - 44px);
    }

    .dNav{
        position: relative;
        z-index:5;
        background-color: #fff;
    }
</style>
