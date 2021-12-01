<template>
  <div class="personal">
    <div class="top-bg"></div>
    <div class="top-avatar">
      <img src="../assets/images/User_base.png" alt="" />
      <h1>王豆豆</h1>
      <p>18911023266</p>
    </div>
    <div class="list">
      <div class="list-item">
        <p>我的行程计划</p>
        <i class="iconfont icon-right"></i>
      </div>
       <div class="list-item">
        <p>我的收藏</p>
        <i class="iconfont icon-right"></i>
      </div>
       <div class="list-item">
        <p>售后于客服</p>
        <i class="iconfont icon-right"></i>
      </div>
       <div class="list-item">
        <p>我的优惠券</p>
        <i class="iconfont icon-right"></i>
      </div>
       <div class="list-item">
        <p>常用旅客管理</p>
        <i class="iconfont icon-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import tabbar from "../components/tabbar";
export default {
  name: "Personal",
  components: {
    tabbar,
  },
  created() {},
};
</script>

<style lang="scss">
.personal {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  .top-bg {
    width: 100vw;
    height: 149px;
    background-image: url("../assets/images/Cover.png");
  }
  .top-avatar{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -63px;
    img{
      width: 139px;
      height: 139px;
    }
    h1{
      margin-bottom: 6px;
      font-family: PingFangSC-Regular;
      font-size: 20px;
      color: #203152;
      letter-spacing: 1px;
    }
    p{
      font-family: PingFangSC-Regular;
      font-size: 15px;
      color: #7C8698;
      letter-spacing: 1px;
    }
  }
  .list{
    margin-top: 52px;
    &-item{
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      margin-bottom: 30px;
      &::after{
        position: absolute;
        bottom: -12px;
        content: '';
        width: 335px;
        height: 1px;
        background-color: rgba($color: #ccc, $alpha: 0.2);
      }
      p{
        font-family: PingFangSC-Regular;
        font-size: 16px;
        font-weight: 500;
        color: #262626;
        letter-spacing: 1px;
      }
      i{
        font-size: 17px;
        color:  #C2C4CA;
        font-weight: 600;
      }
    }
  }
}
</style>
