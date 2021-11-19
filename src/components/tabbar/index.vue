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
  @include fix-position($site:bottom);
  width: 100vw;
  padding: 4px 0;
  @include flex($justify:space-evenly);
  border-top: 0 solid #DADADA;
  box-shadow: 0 -4px 18px rgba(0,0,0,0.15);
  background-color: #fff;
  .tabbar-item{
    width: 33.333%;
    @include flex($direction:column);
    i{
      font-size: 20px;
      margin-bottom: 5px;
    }
    span{
      @include font-style;
    }
  }
}
</style>