<template>
  <div class="index">
     <searchBox/>
     <carousel/>
  </div>
</template>

<script>
import searchBox from '../components/searchbox'
import carousel from '../components/swiper'
export default {
  name: 'Index',
  components: {
    searchBox,
    carousel
  },
  created(){
    
  }
}
</script>

<style lang="scss">
@import '../assets/styles/layout.scss';
.index{
  width: 100vw;
}
</style>
