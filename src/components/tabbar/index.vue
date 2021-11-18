<template>
  <div class="tabbar">
    <div class="tabbar-item">
      <i class="iconfont icon-home"></i>
      <span>首页</span>
    </div>
    <div class="tabbar-item">
       <i class="iconfont icon-visa"></i>
      <span>目的地</span>
    </div>
    <div class="tabbar-item">
       <i class="iconfont icon-personal"></i>
      <span>我的</span>
    </div>
  </div>
</template>

<script>
export default {
}

</script>
<style lang='scss'>
@import '../../assets/styles/layout.scss';
.tabbar{
  position: fixed;
  bottom: 0;
  width: 100vw;
  padding: 4px 0;
  @include flex($justify:space-evenly);
  border-top: 0 solid #DADADA;
  background-color: #fff;
  .tabbar-item{
    box-sizing: border-box;
    width: 33.333%;
    @include flex($direction:column);
    i{
      font-size: 20px;
      margin-bottom: 2px;
    }
    span{
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #666666;
    }
  }
}
</style>