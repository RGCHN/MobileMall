<template>
  <div class="user-info">
    <div class="base-info">
      <div class="logo"></div>
      <div class="login">
        <div class="user-name">登录/注册</div>
        <div class="phone">暂无绑定手机号</div>
      </div>
    </div>
    <div class="account-info">
      <div class="count-item">
        <div class="num">0.00元</div>
        <div class="text">我的余额</div>
      </div>
      <div class="count-item">
        <div class="num">0个</div>
        <div class="text">我的优惠</div>
      </div>
      <div class="count-item">
        <div class="num">0分</div>
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
  }

  .account-info{
    display: flex;
    justify-content:center;
  }
  .account-info .count-item{
    flex: 1;
    text-align: center;
  }
</style>