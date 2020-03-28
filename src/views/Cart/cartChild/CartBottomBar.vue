<template>
  <div class="bottom-bar">
    <div class="button">
      <check-button class="check" :is-checked="isAllChecked"
                    @checkBtnClick="allSelectClick"/>
      <span class="select-all">全选</span>
    </div>

    <div class="total">
      合计:{{totalPrice}}
    </div>

    <div class="gocalc" @click="calcClick">
      结算({{checkedLength}})
    </div>
  </div>
</template>

<script>
  import CheckButton from "./CheckButton";
  import {mapGetters} from "vuex";
  export default {
    name: "CartBottomBar",
    components:{
      CheckButton,
    },
    computed: {
      ...mapGetters(['cartList','cartLength']),
      totalPrice() {
        return '￥' + this.cartList.filter(item => {
          return item.checked
        }).reduce((pre, item) => {
          return item.price * item.count + pre
        }, 0).toFixed(2);
      },
      isAllChecked() {
        return this.cartList.find(item =>
          item.checked === false
        ) === undefined;
      },
      checkedLength(){
        return this.cartList.filter( item =>
          item.checked === true
        ).length
      }
    },
    methods:{
      allSelectClick(){
        let SelectAll = this.cartList.find(item => !item.checked);
        if(SelectAll){
          this.$store.commit('modifyChecked',true);
        }else{
          this.$store.commit('modifyChecked',false);
        }
      },
      calcClick(){
        if(this.checkedLength === 0 ) {
          this.$Toast('没有选中的宝贝',2000);
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar{
    width: 100%;
    display: flex;
    height: 49px;
    line-height:49px;
    text-align: center;
    margin-left:5px;
    font-size: 16px;
    justify-content: space-between;
    background-color: #eee;
    position: fixed;
    bottom: 49px;
    right: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    box-sizing: border-box;
  }
  .button{
    display: flex;
  }
  .button .check{
    margin: 6px 5px 0 0;
  }

  .total{
    color:#F79F1F;
  }

  .gocalc{
    color: #ffffff;
    margin: 3px 5px;
    border-radius: 10px;
    background-color: #ED4C67;
    width: 60px;
    height: 38px;
    line-height: 38px;
  }

</style>