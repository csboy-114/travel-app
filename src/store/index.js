import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nowItem:'首页',
    imgList:undefined,
    navList:undefined
  },
  mutations: {
    setNowItem(state,text){
      state.nowItem=text
    },
    setImgList(state,imgArr){
      state.imgList=imgArr
    },
    setNavList(state,navArr){
      state.navList=navArr
    }
  },
  actions: {
  },
  modules: {
  }
})
