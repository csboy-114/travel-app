<template>
  <div class="details" id="details">
    <top-header class="details-header">
      <i @click="goBack" class="iconfont icon-back"></i>
      <span>
        <i class="iconfont icon-collect"></i>
        <img src="@/assets/images/Combined Shape.png">
      </span>
    </top-header>
    <div class="details-top" :style="{backgroundImage:`url(${detailsInfo.img})`}"></div>
    <div class="details-intros">
      <p>
        {{detailsInfo.title}}
      </p>
      <div class="give">
        <span :key="index"
        v-text="item" 
        v-for="(item,index) in detailsInfo.tags"></span>
      </div>
      <div class="counts">
        <span>浏览 {{detailsInfo.vistor_counts}}</span>
        <span>已售 {{detailsInfo.sold_counts}}份</span>
      </div>
    </div>
    <div class="details-main">
      <div class="details-main-header"><span>产品简介</span></div>
      <div class="details-main-text">
        <div
        :key="index"
        v-for="(item,index) in detailsInfo.intros" 
        class="details-main-text-item">
         {{item}}
        </div>
      </div>
       <div class="details-main-header"><span>预定流程</span></div>
       <img src="@/assets/images/img_prebook.png">
      <div class="details-main-header"><span>预定流程</span></div>
      <div class="details-main-text">
        <div class="details-main-text-item">
         {{detailsInfo.refund}}
        </div>
      </div>
    </div>
    <div class="details-footer"></div>
  </div>
</template>

<script>
import {getDetailsInfo} from '../api/details'
import TopHeader from '../components/header_copy'
export default {
  name:'Details',
  components:{
    TopHeader
  },
  data() {
    return {
      detailsInfo:{}
    }
  },
  methods:{
    goBack(){
      this.$router.back()
    },
    init(){
      const id=this.$route.params.id
      getDetailsInfo(id).then(res=>{
        this.detailsInfo=res
      }).catch(err=>{
        console.log(err);
      })
    }
  },
  created() {
    this.init()
  },
}

</script>
<style lang='scss'>
.details{
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: #fff;
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
        width: 30px;
        margin-left: 10px;
      }
    }
  }
  &-top{
    width: 100vw;
    height: 230px;
    background-image: url('../assets/images/图.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
  &-intros{
    width: 335px;
    margin: 0 auto;
    padding-top: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #dadada;
    p{
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #333333;
      letter-spacing: 1px;
      text-align: justify;
      line-height: 24px;
    }
    .give{
      display: flex;
      margin-top: 8px;
      span{
        padding: 2px 12px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #5278A0;
        line-height: 18px;
        border: 1px solid #5278A0;
        &:nth-child(1){
          margin-right: 12px;
        }
      }
    }
    .counts{
      display: flex;
      justify-content: space-between;
      font-family: PingFangSC-Regular;
      margin-top: 12px;
      font-size: 12px;
      color: #999;
      text-align: justify;
    }
  }
  &-main{
    margin-top: 40px;
    &-header{
      display: flex;
      line-height: 20px;
      font-family: PingFangSC-Medium;
      font-size: 20px;
      color: #333333;
      font-weight: 600;
      &:before{
        display: block;
        content: '';
        width: 6px;
        height: 22px;
        margin-right: 10px;
        background-color: #BF2A2F;
      }
    }
    &-text{
      width: 350px;
      margin: 20px auto 40px;
      &-item{
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #333333;
        line-height: 24px;
      }
    }
    img{
      display: block;
      margin: 20px auto;
    }
  }
}
</style>