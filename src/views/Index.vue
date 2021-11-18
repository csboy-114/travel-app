<template>
  <div class="index">
     <searchBox/>
     <carousel/>
     <navbar/>
     <tabbar/>
  </div>
</template>

<script>
import searchBox from '../components/searchbox'
import carousel from '../components/swiper'
import navbar from  '../components/navbar'
import tabbar from '../components/tabbar'
export default {
  name: 'Index',
  components: {
    searchBox,
    carousel,
    navbar,
    tabbar
  },
}
</script>

<style lang="scss">
.index{
  width: 100vw;
}
</style>
