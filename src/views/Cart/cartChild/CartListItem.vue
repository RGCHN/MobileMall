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
        <span class="price">{{product.price}}</span>
        <span class="count">x{{product.count}}</span>
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
      }
    },
    methods:{
      checkBtnClick(){
        this.product.checked = !this.product.checked;
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
    margin-right: 8px;
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
  .price{
    color:#F79F1F;
  }
</style>