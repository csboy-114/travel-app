<template>
  <div class="tabbar">
    <div 
    class="tabbar-item" 
    v-for="item in tabbarInfo" 
    :key="item.text"
    @click="goto(item.text)"
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
          class:'icon-home'
        },
        {
          text:'目的地',
          class:'icon-visa'
        },
        {
          text:'我的',
          class:'icon-personal'
        }
      ],
    }
  },
  methods:{
    goto(text){
      this.setNowItem(text)
      const path= tabbarRoutes.find(item=>item.text==text).routes
      this.$router.push(path)
    },
    ...mapMutations({setNowItem:'setNowItem'})
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
  padding: 4px 0;
  @include flex($justify:space-evenly);
  border-top: 0 solid #DADADA;
  box-shadow: 0 -4px 18px rgba(0,0,0,0.15);
  background-color: #fff;
  .tabbar-item{
    width: 33.333%;
    @include flex($direction:column);
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