<template>
    <div id="category">
        <nav-bar class="nav"><div slot="mid">商品分类</div></nav-bar>
        <div class="content">
            <scroll class="menu">
                <slide-menu :categories="categories" @selectItem="selectItem"></slide-menu>
            </scroll>
            <scroll class="tab-content" :data="[categoryData]">
                <tab-content :subcategories="getSubcategoryData"></tab-content>
           </scroll>
        </div>
    </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import Scroll from "../../components/common/scroll/Scroll";

  import TabContent from "./childComps/TabContent";
  import SlideMenu from "./childComps/SlideMenu";

  import {getCategory,getCategoryDetail,getSubCategory} from "../../network/category";
  export default {
    name: "Category",
    components:{NavBar,Scroll,SlideMenu,TabContent},
    data(){
      return{
        categories:[],
        categoryData:{},
        currentIndex:-1,
      }
    },
    created(){
      this.getData();
    },
    computed:{
      getSubcategoryData(){
          if(this.currentIndex === -1){
              return {}
          }
          return this.categoryData[this.currentIndex].subcategories;
      },
      showCategoryDetail(){
          if(this.currentIndex === -1){
              return []
          }
          return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
      }
    },
    methods:{
      getData(){
        getCategory().then( res => {
            this.categories = res.data.category.list;
            for(let i = 0; i < this.categories.length; i++){
                this.categoryData[i] = {
                    subcategories:{},
                    categoryDetail:{
                        'pop':[],
                        'new':[],
                        'sell':[]
                    }
                }
            }
            this.getSubData(0);
        })
      },
      getSubData(index){
        this.currentIndex = index;
        const mailKey = this.categories[index].maitKey;
        getSubCategory(mailKey).then( res => {
           this.categoryData[index].subcategories = res.data;
           this.categoryData = {...this.categoryData};
           this.getDetailData('pop');
           this.getDetailData('sell');
           this.getDetailData('new');
        })
      },
      getDetailData(type){
        const miniWallkey = this.categories[this.currentIndex].miniWallkey;
        getCategoryDetail(miniWallkey,type).then(res => {
           this.categoryData[this.currentIndex].categoryDetail[type] = res;
           this.categoryData = {...this.categoryData};
        })
      },
      selectItem(index){
        this.getSubData(index);
      },
    },
  }
</script>

<style scoped>
  .nav{
      color: #fff;
      font-weight: 700;
      background-color: var(--color-tint);
  }
  .content{
      position: absolute;
      left: 0;
      right: 0;
      top:44px;
      bottom: 49px;
      display: flex;
      overflow: hidden;
  }

  .tab-content{
        height: 100%;
        flex: 1;
  }


</style>
