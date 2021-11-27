<template>
  <div class="index">
    <loading  :isShow="isLoading"/>
     <topheader>
       <searchBox :placeholder="'搜索目的地/折扣/关键字'"/>
     </topheader>
     <carousel :imgList="imgList" :swiperConfig="{loop:true,autoplay:true,effect:'fade'}"/>
     <navbar :navList="navList"/>
     <count/>
     <backtop/>
     <tabbar/>
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
      this.imgList=swiperRes.data.data;
      this.navList=navbarRes.data.data;
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
  overflow-x:hidden ;
}
</style>
