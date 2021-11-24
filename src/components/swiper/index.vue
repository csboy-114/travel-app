<template>
  <swiper class="swiper-box" ref="mySwiper" :options="finalSwiperOptions">
    <swiper-slide v-for="(item,index) in imgList" :key="index">
      <img :src="item.url" alt="轮播图">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        }
      },
    };
  },
  props:{
    imgList:{
      type:Array,
      default:()=>{
        return []
      }
    },
    swiperConfig:{
      type:Object
    }
  },
  computed:{
    finalSwiperOptions(){
      return {
        ...this.swiperOptions,
        ...this.swiperConfig
      }
    }
  }
};
</script>
<style lang="scss">
.swiper-box{
  width: 100vw;
  height: 180px;
  img{
    width: 100%;
  }
}
</style>
