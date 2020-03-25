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
    display: flex;
    height: 42px;
    line-height:42px;
    text-align: center;
    position: relative;
    margin-left:5px;
    font-size: 16px;
    justify-content: space-between;
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
    margin-right: 5px;
    border-radius: 15px;
    background-color: #ED4C67;
    width: 60px;
  }

</style>