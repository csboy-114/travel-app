<template>
  <div class="index">
     <topheader>
       <searchBox/>
     </topheader>
     <carousel :imgList="imgList" :swiperConfig="{loop:true,autoplay:true,effect:'fade'}"/>
     <navbar :navList="navList"/>
     <count/>
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
import {getSwiperInfo,getNavInfo} from '../api/index'
import {mapState,mapMutations} from 'vuex'
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
      // imgList:[],
      // navList:[]
    }
  },
  computed:{
    ...mapState(['imgList','navList'])
  },
  methods:{
    ...mapMutations(['setImgList','setNavList'])
  },
  created(){
    if(this.imgList&&this.navList){
      return;
    }
    Promise.all([getSwiperInfo(),getNavInfo()]).then(res=>{
      const [swiperRes,navbarRes]=res;
      this.setImgList(swiperRes.data.data)
      this.setNavList(navbarRes.data.data)
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
