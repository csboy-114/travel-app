<template>
  <div class="panel"  :style="{margin,padding}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'Panel',
  props:{
    margin:{
      type:String,
      default:'10px 0 10px'
    },
    padding:{
      type:String,
      default:'10px'
    }
  }
}

</script>
<style lang='scss'>
  .panel{
    width: 100vw;
    background-color: #fff;
  }
</style>