<template>
  <div class="navbar">
    <div class="navbar-item" v-for="item in navList||defaultArr" :key="item.text">
      <img :src="item.url" alt="餐厅预订">
      <span>{{item.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    navList:{
      type:Array,
      default:()=>{
        return []
      }
    }
  },
  data() {
    return {
      defaultArr:[
        {url:require('../../assets/images/餐厅.png'),text:'餐厅预订'},
        {url:require('../../assets/images/和服.png'),text:'和服体验'},
        {url:require('../../assets/images/茶道.png'),text:'茶道'},
        {url:require('../../assets/images/用车.png'),text:'用车服务'},
        {url:require('../../assets/images/轻奢.png'),text:'轻奢'},
        {url:require('../../assets/images/医美.png'),text:'医美'},
        {url:require('../../assets/images/行程.png'),text:'行程定制'},
        {url:require('../../assets/images/免税品.png'),text:'免税品'},
        
      ]
    }
  },
}

</script>
<style lang='scss'>
@import '../../assets/styles/layout.scss';
.navbar{
  box-sizing: content-box;
  width: 100vw;
  @include flex($justify:space-bewteen);
  padding: 14px 0 14px;
  background-color: #fff;
  box-shadow: 0 -4px 4px rgba(0,0,0,1);
  .navbar-item{
    width: 25%;
    @include flex($direction:column);
    &:nth-child(-n+4){
      margin-bottom: 10px;
    }
    img{
      display: block;
      width: 30px;
      height: 30px;
      margin-bottom: 8px;
    }
    span{
      @include font-style;
    }
  }
}
</style>