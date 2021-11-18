<template>
  <div class="navbar">
    <div class="navbar-item">
      <img src="../../assets/images/餐厅.png" alt="餐厅预订">
      <span>餐厅预订</span>
    </div>
    <div class="navbar-item">
      <img src="../../assets/images/和服.png" alt="和服体验">
      <span>和服体验</span>
    </div>
    <div class="navbar-item">
      <img src="../../assets/images/茶道.png" alt="茶道">
      <span>茶道</span>
    </div>
    <div class="navbar-item">
      <img src="../../assets/images/用车.png" alt="用车服务">
      <span>用车服务</span>
    </div>
     <div class="navbar-item">
      <img src="../../assets/images/轻奢.png" alt="轻奢">
      <span>轻奢</span>
    </div>
    <div class="navbar-item">
      <img src="../../assets/images/医美.png" alt="医美">
      <span>医美</span>
    </div>
    <div class="navbar-item">
      <img src="../../assets/images/行程.png" alt="行程定制">
      <span>行程定制</span>
    </div>
    <div class="navbar-item">
      <img src="../../assets/images/免税品.png" alt="免税品">
      <span>免税品</span>
    </div>
  </div>
</template>

<script>
export default {
}

</script>
<style lang='scss'>
@import '../../assets/styles/layout.scss';
.navbar{
  width: 100vw;
  @include flex($justify:space-bewteen);
  padding: 14px 0 8px;
  background-color: #fff;
  .navbar-item{
    box-sizing: border-box;
    width: 25%;
    @include flex($direction:column);
    margin-bottom: 10px;
    img{
      display: block;
      width: 44px;
      height: 44px;
      margin-bottom: 3px;
    }
    span{
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #999999;
      letter-spacing: 0;
      text-align: center;
    }
  }
}
</style>