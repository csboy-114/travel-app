<template>
  <div class="count">
    <div class="count-title">精选折扣</div>
    <div class="count-item" 
    v-for="item in imgInfo" 
    :key="item.id"
    @click="goTo(item.id)"
    >
      <img :src="item.url" alt="">
      <div class="count-item-description">
        私人定制 | 巴黎凡尔赛宫+枫丹白露宫 包车1日 …
      </div>
      <div class="count-item-price">
        2199元起
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgInfo:[
        {
          id:1,
          url:require('../../assets/images/md1.png')
        },        
        {
          id:2,
          url:require('../../assets/images/md2.png')
        },        
        {
          id:3,
          url:require('../../assets/images/md3.png')
        },        
        {
          id:4,
          url:require('../../assets/images/md4.png')
        },        
        {
          id:5,
          url:require('../../assets/images/md5.png')
        },        
        {
          id:6,
          url:require('../../assets/images/md6.png')
        },        
        {
          id:7,
          url:require('../../assets/images/md7.png')
        },        
        {
          id:8,
          url:require('../../assets/images/md8.png')
        }, 
        {
          id:9,
          url:require('../../assets/images/md9.png')
        }, 
        {
          id:10,
          url:require('../../assets/images/md10.png')
        }, 
      ]
    }
  },
  methods:{
    goTo(id){
      this.$router.push(`/details/${id}`)
    }
  }
}

</script>
<style lang='scss'>
@import "../../assets/styles/layout.scss";
.count{
  display: content-box;
  width: 100vw;
  margin-top: 10px;
  padding: 15px 0 70px 15px;
  font-size: 14px;
  background-color: #fff;
  &-title{
    margin-bottom: 10px;
    @include font-style($fontSize:16px,$fontColor:#191919);
    font-weight: 600;
  }
  &-item{
    @include flex($inline:inline-block,$direction:column);
    justify-content: space-between;
    &:nth-child(2n){
      margin-right: 29px;
    }
    margin-bottom: 10px;
    img{
      width: 158px;
      margin-bottom: 6px;
    }
    &-description{
      width: 158px;
      height: 40px;
      margin-bottom: 2px;
      @include font-style($fontColor:#333);
      @include ellipsis($singe:multi-line);
    }
    &-price{
      @include font-style($fontColor:#E93B3B);
      font-weight: 600;
    }
  }
}
</style>