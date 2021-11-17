<template>
  <div class="panel" :class="[transformClass]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'Panel',
  props:{
    transformClass:{
      type:String,
      default:''
    }
  }
}

</script>
<style lang='scss'>
  .panel{
    width: 100%;
    background-color: #fff;
    padding: 10px;
    margin-bottom: 10px;
  }
</style>