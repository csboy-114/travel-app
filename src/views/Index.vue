<template>
  <div class="index">
     <searchBox/>
     <carousel :imgList="imgList"/>
     <navbar :navList="navList"/>
     <tabbar/>
  </div>
</template>

<script>
import searchBox from '../components/searchbox'
import carousel from '../components/swiper'
import navbar from  '../components/navbar'
import tabbar from '../components/tabbar'
import {getSwiperInfo,getNavInfo} from '../api/index'
export default {
  name: 'Index',
  components: {
    searchBox,
    carousel,
    navbar,
    tabbar
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
