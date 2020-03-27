<template>
  <div class="user-info">
    <div class="base-info">
      <div class="user-logo">
        <img src="~assets/img/profile/avatar.svg" alt="">
      </div>
      <div class="login">
        <div class="user-name">登录/注册</div>
        <div class="phone">
          <img src="~assets/img/profile/phone.svg" alt="" class="phone-icon">
          <span>暂无绑定手机号</span>
        </div>
      </div>
      <div class="more">
        <i class="arrow-right"></i>
      </div>
    </div>

    <div class="account-info">
      <div class="count-item">
        <span class="num">0.00</span>元
        <div class="text">我的余额</div>
      </div>
      <div class="count-item">
        <span class="num">0</span>个
        <div class="text">我的优惠</div>
      </div>
      <div class="count-item">
        <span class="num">0</span>分
        <div class="text">我的积分</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserInfo"
  }
</script>

<style scoped>
  .base-info{
    display: flex;
    background-color: var(--color-tint);
    padding:10px 15px;
    margin-top: -5px;
    align-items: center;
    color: #fff;
    vertical-align: middle;
    font-size:14px;
  }

  .base-info .user-logo{
    margin-right: 5px;
  }

  .base-info .user-logo img{
    width: 60px;
    height: 60px;
    border-radius: 30px;
  }

  .base-info .phone-icon{
    width: 20px;
    height: 30px;
    vertical-align: middle;
  }

  .base-info .phone span{
    vertical-align: middle;
  }

  .base-info .more{
    margin-left: auto;
  }


  .base-info .arrow-right{
    display: inline-block;
    width: 9px;
    height: 9px;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
    transform: rotate(45deg);
  }
  .account-info{
    display: flex;
    justify-content:center;
    background-color: #fff;
  }
  .account-info .count-item{
    flex:1;
    text-align: center;
    margin-right: 1px;
    color:var(--color-text);
    font-size: 14px;
    padding: 18px;
    border-right: 1px solid rgba(0,0,0,0.1);
  }
  .count-item:last-of-type{
    margin-right: 0;
    border-right: none;
  }

  .count-item .num{
    font-size: 24px;
    font-weight: 700;
    color:#F7C709;
  }

  .count-item .text{
    margin-top: 6px;
  }
</style>