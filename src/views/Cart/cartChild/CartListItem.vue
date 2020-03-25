<template>
  <div class="cart-list-item">
    <div class="selector">
      <check-button :is-checked="product.checked" @checkBtnClick="checkBtnClick"/>
    </div>
    <div class="product-img">
      <img :src="product.imgURL" alt="商品图片">
    </div>
    <div class="info">
      <div class="title">{{product.title}}</div>
      <div class="desc">商品描述: {{product.desc}}</div>
      <div class="num">
        <span class="price">￥ {{product.price}}</span>
        <div class="count">
          <button class="add" @click="addProduct">+</button>
          <span>{{product.count}}</span>
          <button class="sub" @click="subProduct">-</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from "./CheckButton";
  export default {
    name: "CartListItem",
    components:{CheckButton},
    props:{
      product:{
        type:Object,
        default(){
          return {}
        }
      },
    },
    methods:{
      checkBtnClick(){
        this.product.checked = !this.product.checked;
      },
      addProduct(){
        if(this.product.count <= 998){
          this.$store.commit('addCount',this.product.iid);
        }else{
          this.$Toast('宝贝不能再增加了',2000);
          window.alert('宝贝不能再增加了！')
        }

      },
      subProduct(){
        if(this.product.count <=1){
          this.$Toast('宝贝不能再减少了',2000);
        }else{
          this.$store.commit('subCount',this.product.iid);
        }
      }
    }
  }
</script>

<style scoped>
  .cart-list-item{
    width: 100%;
    padding: 5px;
    font-size: 0;
    display: flex;
    border-bottom: 1px solid #ccc;
  }

  .selector{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2px;
  }

  .title,.desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .product-img{
    padding: 5px;
  }

  .product-img img{
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .info{
    font-size: 17px;
    color:#333;
    overflow: hidden;
    padding:5px 10px;
    position: relative;
  }

  .info .desc{
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .num{
    margin-top: 15px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .count{
    float: right;
  }
  .count .add,.count .sub{
    background: none;
    border:solid 1px rgba(0,0,0,0.2);
    color: #eb4d4b;
    width: 20px;
    height: 20px;
    margin: 0 5px 3px 5px;
    border-radius: 3px;
    font-size: 16px;
    text-align: center;
  }
  .count span{
    margin-top: 5px;
  }
  .price{
    color:#F79F1F;
  }
</style>