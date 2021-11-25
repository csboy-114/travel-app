<template>
  <div class="des">
    <h1>Destination</h1>
    <tabbar/>
  </div>
</template>

<script>
import tabbar from '../components/tabbar'
export default {
  name:'Destination',
  components:{
    tabbar
  },
  created(){
    console.log('Destination created');
  }
}
</script>
