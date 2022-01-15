<template>
  <div class="home">
     <keep-alive include="Index,Destination,Personal">
       <component :is="currentComponent"></component>
    </keep-alive>
    <tabbar/>
  </div>
</template>

<script>
import tabbar from '../components/tabbar'
import Index from './Index.vue'
import Destination from './Destination.vue'
import Personal from './Personal.vue'
import {mapState} from 'vuex'
export default {
  components:{
    tabbar,
    Index,
    Destination,
    Personal
  },
  computed:{
    ...mapState({currentComponent:'currentComponent'})
  }
}

</script>
<style lang='scss'>
.home{
  width: 100vw;
  height: 100vh;
}
</style>