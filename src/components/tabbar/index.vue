<template>
  <div class="tabbar">
    <div 
    class="tabbar-item" 
    v-for="item in tabbarInfo" 
    :key="item.text"
    @click="goto(item)"
    >
      <i class="iconfont" :class="[item.class,nowItem==item.text?'tabbar-item-red':'']"></i>
      <span :class="[nowItem==item.text?'tabbar-item-red':'']">{{item.text}}</span>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
const tabbarRoutes=[
  {
    text:'首页',
    routes:'/'
  },
  {
    text:'目的地',
    routes:'/destination'
  },
  {
    text:'我的',
    routes:'/personal'
  },
]
export default {
  data() {
    return {
      tabbarInfo:[
        {
          text:'首页',
          class:'icon-home',
          name:'Index'
        },
        {
          text:'目的地',
          class:'icon-dest',
          name:'Destination'
        },
        {
          text:'我的',
          class:'icon-personal',
          name:'Personal'
        }
      ],
    }
  },
  methods:{
    goto(item){
      this.setNowItem(item.text)
      this.setComponentName(item.name)
    },
    ...mapMutations({setNowItem:'setNowItem',setComponentName:'setComponentName'})
  },
  computed:{
    ...mapState({nowItem:'nowItem'})
  }
}

</script>
<style lang='scss'>
@import '../../assets/styles/layout.scss';
.tabbar{
  @include fix-position($site:bottom);
  width: 100vw;
  padding: 6px 0;
  @include flex();
  justify-content: space-evenly;
  border-top: 0 solid #DADADA;
  box-shadow: 0 -4px 18px rgba(0,0,0,0.15);
  background-color: #fff;
  .tabbar-item{
    width: 33.333%;
    @include flex($direction:column);
    justify-content: space-evenly;
    align-items: center;
    i{
      font-size: 20px;
      margin-bottom: 5px;
    }
    span{
      @include font-style;
    }
    &-red{
      color: red!important;
    }
  }
}
</style>