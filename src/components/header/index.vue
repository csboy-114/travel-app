<template>
  <div id="header" class="header" :class="{ 'header-transition': isChangeBgc }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChangeBgc: false,
      isLock:false
    };
  },
  methods: {
    isOver() {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      const headerHight=document.getElementById("header").clientHeight;
      return scrollTop > headerHight;
    },
    scrollFn() {
      if (!this.isLock&&this.isOver()) {
        this.isLock=true
        this.isChangeBgc = true;
      } else if(this.isLock&&!this.isOver()) {
        this.isLock=false
        this.isChangeBgc = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollFn, false);
  },
  activated(){
    window.addEventListener("scroll", this.scrollFn, false);
  },
  deactivated(){
     this.isChangeBgc=false
     window.removeEventListener("scroll", this.scrollFn);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollFn);
  },
};
</script>
<style lang="scss">
@import "../../assets/styles/layout.scss";
.header {
  @include fix-position();
  width: 100%;
  height: 56px;
  @include flex();
  background-color: transparent;
  transition:background 0.3s ease-out;
  &-transition {
    background-color: rgba(25, 196, 138, 0.9);
  }
}
</style>
