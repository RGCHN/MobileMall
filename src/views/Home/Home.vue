<template>
    <div id="home" class="wrapper">
        <nav-bar class="home-nav"><div slot="mid">购物街</div></nav-bar>
        <tab-control ref="tabControl1" class="tab-control"
                     :titles="tabTitle"
                     @tabClick="tabClick" v-show="isFixed"/>
        <scroll class="scontent" ref="scroll"
                @scrollpos="contentScroll"  @pullingUp="loadMore"
                :upload = "true" :probe-type="3" >
            <home-swiper :banners="banners" @swipeImgLoad="swipeImgLoad"/>
            <recommend-view :recommends="recommends"/>
            <feature-view/>
            <tab-control ref="tabControl2" v-show="!isFixed"
                         :titles="tabTitle"
                         @tabClick="tabClick"/>
            <goods-list :goods-list="showGoods"/>
        </scroll>

        <!--组件不能监听点击 除非加上.native修饰符（v-on修饰符）-->
        <back-top @click.native="backTopClick" v-show="showBackTop"></back-top>
    </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import goodsList from "components/content/goods/goodsList";
  import Scroll from "components/common/scroll/Scroll";
  import backTop from "components/content/backTop/backTop";

  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  import {getHomeMultidata,getHomeGoods} from "network/home";
  import {debounce} from "../../Utils/utils";
  import {tabControlMixin} from "../../common/mixin";

  export default {
    name: "Home",
    components:{
      NavBar, TabControl, goodsList,Scroll,backTop,
      HomeSwiper, RecommendView, FeatureView,
    },
    mixins:[tabControlMixin],
    data(){
      return {
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        currentType:'pop',
        showBackTop:false,
        tabOffsetTop:0,
        isFixed:false,
        tabTitle:['流行','新款','精选'],
        saveY:0,
        homeItemListener:{}
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list;
      }
    },
    created() {
      this.getData();
      this.getGoods('pop');
      this.getGoods('new');
      this.getGoods('sell');
    },
    mounted(){
      //监听GoodsItem中图片加载完成
      const refresh = debounce(this.$refs.scroll.refresh,50);
      this.homeItemListener = () => {
        refresh();
      };
      this.$bus.$on("imgLoaded",this.homeItemListener);
    },
    activated(){
      this.$refs.scroll.refresh();
      this.$refs.scroll.scrollTo(0,this.saveY,0);
    },
    deactivated() {
      //保存离开时的位置
      this.saveY = this.$refs.scroll.scroll.y;
      //取消全局事件的监听
      this.$bus.$off('imgLoaded',this.homeItemListener);
    },
    methods:{
      /*事件监听相关的方法*/
      tabClick(index){
        switch(index){
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
          default:
            this.currentType = 'pop';
        }
        this.$refs.tabControl2.currentIndex = index;
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.scroll.scrollTo(0,-this.tabOffsetTop+40,0);
      },
      backTopClick(){
        /*通过refs拿到ref为scroll的对象 调用里面的方法*/
        this.$refs.scroll.scrollTo(0,0);
      },
      contentScroll(position){
        //判断滚动位置 以显示回到顶部按钮
        this.showBackTop = Math.abs(position.y) > 2000;
        //判断滚动距离决定tabcontrol是否吸顶
        this.isFixed = Math.abs(position.y) >= this.tabOffsetTop - 42;
      },
      loadMore(){
        this.getGoods(this.currentType);
        const refresh = debounce(this.$refs.scroll.refresh,50);
        this.$bus.$on("imgLoaded",() => {
          refresh();
        });
      },
      swipeImgLoad(){
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      },

      /*网络请求相关的方法*/
      getData(){
        getHomeMultidata()
          .then(res => {
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
          })
          .catch(err => {
            console.log(err);
          })
      },
      getGoods(type){
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp();
        });
      },
    }
  }
</script>

<!--scroped 样式只对当前文件生效 不影响其他组件-->
<style scoped>
    #home{
        height: 100vh;/*vh:视口高度*/
        position: relative;
    }
    .home-nav{
        background-color: var(--color-tint);
        color: #fff;
        font-weight: 700;
    }
    .scontent{
        height: calc(100% - 93px);
        overflow: hidden;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
    }
    .tab-control{
        position: relative;
        z-index:9;
    }
</style>
