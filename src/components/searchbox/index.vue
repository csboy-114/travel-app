<template>
  <div class="search-box">
    <i class="iconfont icon-search"></i>
    <input autocomplete="off" type="text" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  props:{
    placeholder:{
      type:String,
      default:''
    }
  }
};
</script>
<style lang="scss">
@import '../../assets/styles/layout.scss';
.search-box {
  @include flex($justify:flex-start);
  margin-top: 25px;
  margin-left: 20px;
  width: 335px;
  height: 30px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.19);
  border-radius: 27.5px;
  .icon-search{
    margin-left: 20px;
    color: #fff;
    font-weight: 500;
  }
  input {
    width: 200px;
    height: 100%;
    color: #fff;
    font-size: 14px;
    margin-left: 10px;
    &::-webkit-input-placeholder {
      color: #fff;
    }
    &::-moz-placeholder {
      /* FF 4-18 */
      color: red;
    }
    &::-moz-placeholder {
      /* FF 19+ */
      color: red;
    }
    &:-ms-input-placeholder {
      /* IE 10+ */
      color: red;
    }
    background-color: transparent;
    
  }
}
</style>
