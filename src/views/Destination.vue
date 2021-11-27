<template>
  <div class="des">
    <div class="des-header">
      <h1>目的地</h1>
      <searchBox class="des-header-searchBox" :placeholder="'搜索你想要去的国家'"/>
    </div>
    <div class="des-sidemenu">
      <div 
      class="des-sidemenu-item"
      :style="{'--display': siedebarClickItem==item?'block':'none'}"
      @click="changeSideBarStyle(item)"
      :class="{select:siedebarClickItem==item}"
      v-for="item in sidebarInfo"   
      :key="item"
      >{{item}}</div>
    </div>
    <tabbar/>
  </div>
</template>

<script>
import tabbar from '../components/tabbar'
import searchBox from '../components/searchbox'
export default {
  name:'Destination',
  components:{
    tabbar,
    searchBox
  },
  data() {
    return {
      sidebarInfo:['亚洲','欧洲','非洲','北美','大洋洲','南美','南极洲'],
      siedebarClickItem:'亚洲',
      displayVar:'block'
    }
  },
  methods:{
    changeSideBarStyle(currentItem){
      console.log(currentItem);
      this.siedebarClickItem=currentItem
    }
  }
}
</script>


<style lang="scss">
  .des{
    width: 100vw;
    height: 100vh;
    &-header{
      width: 100vw;
      height: 149px;
      background-image: url('../assets/images/Cover 0.png');
      padding-top: 50px;
      h1{
        margin-bottom: 17px;
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        color: #fff;
      }
    }
    &-sidemenu{
      width: 76px;
      height: 518px;
      font-family: PingFangSC-Regular;
      font-size: 15px;
      text-align: center;
      background-color: #fafafa;
      .select{
        color: #BF2A2F;
        background-color: #fff;
      }
      &-item{
        position: relative;
        height: 40px;
        line-height: 40px;
        color: #000;
        &::before{
          position: absolute;
          display: var(--display);
          left: 0;
          width: 2px;
          height: 40px;
          content: '';
          background-color: #BF2A2F;
        }
      }
    }
  }
</style>
