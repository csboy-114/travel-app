<template>
  <div id="backtop" @click="goTop" v-show="isShow" class="back-top">
    <i class="iconfont icon-up"></i>
  </div>
</template>

<script>
export default {
  name:'backtop',
  data() {
    return {
      isShow: false,
      isLock:false,
    };
  },
  props:{
    scrollContainer:{
      type:String,
      default:''
    }
  },
  methods: {
    isOver() {
      const scrollTop = this.el.scrollTop
      return scrollTop > 80;
    },
    scrollFn() {
      if (!this.isLock&&this.isOver()) {
        this.isLock=true
        this.isShow = true;
      } else if(this.isLock&&!this.isOver()) {
        this.isLock=false
        this.isShow = false;
      }
    },
    goTop(){
      this.el.scrollTo({
        top:0,
        behavior:'smooth'
      })
    }
  },
  computed:{
    el(){
      return document.getElementById(this.scrollContainer)
    }
  },
  mounted() {
    this.el.addEventListener("scroll", this.scrollFn, false);
  },
  activated(){
    this.el.addEventListener("scroll", this.scrollFn, false);
  },
  deactivated(){  
     this.isShow=false
     this.el.removeEventListener("scroll", this.scrollFn);
  },
  beforeDestroy() {
    this.el.removeEventListener("scroll", this.scrollFn);
  },
}

</script>
<style lang='scss'>
@import "../../assets/styles/layout.scss";
.back-top{
  position: fixed;
  @include flex();
  z-index: 200;
  width: 40px;
  height: 40px;
  right: 20px;
  bottom: 80px;
  border-radius: 50%;
  background-color: rgba(25, 196, 138, 0.9);
  transition: 0.7s;
  .icon-up{
    font-size: 30px;
    color:#fff;
    font-weight: 500;
  }
}
</style>