<template>
  <div class="home">
    <component :is="currentComponent"></component>
    <tabbar/>
  </div>
</template>

<script>
import tabbar from '../components/tabbar'

export default {
  components:{
    tabbar
  }
}

</script>
<style lang='scss'>
.home{
  width: 100vw;
  height: 100vh;
}
</style>