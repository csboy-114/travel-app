<template>
  <swiper class="swiper-box" ref="mySwiper" :options="swiperOptions">
    <swiper-slide>
      <img src="../../assets/images/矩形.png" alt="轮播图一">
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/images/矩形.png" alt="轮播图二">
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
        },
      },
    };
  },
  props:{
    imgList:{
      type:Array,
      default:[]
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
