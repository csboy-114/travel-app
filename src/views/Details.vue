<template>
  <div class="details" id="details">
    <top-header class="details-header">
      <i @click="goBack" class="iconfont icon-back"></i>
      <span>
        <i class="iconfont icon-collect"></i>
        <img src="@/assets/images/Combined Shape.png">
      </span>
    </top-header>
    <div class="details-top"></div>
  </div>
</template>

<script>
import TopHeader from '../components/header_copy'
export default {
  name:'Details',
  components:{
    TopHeader
  },
  methods:{
    goBack(){
      this.$router.back()
    }
  }
}

</script>
<style lang='scss'>
.details{
  width: 100vw;
  height: 100vh;
  &-top{
    width: 100vw;
    height: 230px;
    background-image: url('../assets/images/图.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
  &-header{
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    i{
      color: #fff;
      font-size: 20px;
    }
    >span{
      display: flex;
      align-items: center;
      i{
        font-size: 22px;
      }
      img{
        width: 28px;
        margin-left: 10px;
      }
    }
  }
}
</style>