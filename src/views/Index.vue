<template>
  <div class="index">
     <topheader>
       <searchBox/>
     </topheader>
     <carousel :imgList="imgList" :swiperConfig="{loop:true,autoplay:true,effect:'fade'}"/>
     <navbar :navList="navList"/>
     <tabbar/>
     <count/>
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
    count
  },
  data() {
    return {
      imgList:[],
      navList:[]
    }
  },
  created(){
    Promise.all([getSwiperInfo(),getNavInfo()]).then(res=>{
      const [swiperRes,navbarRes]=res;
      this.imgList=swiperRes.data.data;
      this.navList=navbarRes.data.data;
    }).catch(err=>{
      console.log(err);
    })
  }
}
</script>

<style lang="scss">
.index{
  width: 100vw;
}
</style>
