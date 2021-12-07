<template>
  <div class="details" id="details">
    <top-header>
      
    </top-header>
    <div class="details-top"></div>
  </div>
</template>

<script>
import TopHeader from '../components/header_copy'
export default {
  name:'Details',
  components:{
    TopHeader
  }
}

</script>
<style lang='scss'>
.details{
  width: 100vw;
  height: 100vh;
  &-top{
    width: 100vw;
    height: 250px;
    background-image: url('../assets/images/图.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>