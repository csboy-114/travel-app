<template>
  <div class="index" id="index">
    <loading  :isShow="isLoading"/>
     <topheader class="topIndex" parentNode="index">
       <searchBox :placeholder="'搜索目的地/折扣/关键字'"/>
     </topheader>
     <carousel :imgList="imgList" :swiperConfig="{loop:true,autoplay:true,effect:'fade'}"/>
     <navbar :navList="navList"/>
     <count/>
     <backtop :scrollContainer="'index'"/>
  </div>
</template>

<script>
import searchBox from '../components/searchbox'
import carousel from '../components/swiper'
import navbar from  '../components/navbar'
import tabbar from '../components/tabbar'
import topheader from '../components/header'
import loading from '../components/loading'
import count from '../components/count'
import backtop from '../components/backtop'
import {getSwiperInfo,getNavInfo} from '../api/index'
export default {
  name: 'Index',
  components: {
    searchBox,
    carousel,
    navbar,
    tabbar,
    topheader,
    loading,
    count,
    backtop
  },
  data() {
    return {
      imgList:[],
      navList:[],
      isLoading:false
    }
  },
  created(){
    this.isLoading=true
     Promise.all([getSwiperInfo(),getNavInfo()]).then(res=>{
      const [swiperRes,navbarRes]=res;
      this.imgList=swiperRes;
      this.navList=navbarRes;
      this.isLoading=false
    }).catch(err=>{
      console.log(err);
    })
  }
}
</script>

<style lang="scss">
.index{
  width: 100vw;
  height: 100vh;
  overflow: auto;
  .topIndex{
    align-items: center;
  }
}
</style>
