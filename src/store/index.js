import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nowItem:'首页',
    currentComponent:'Index'
  },
  mutations: {
    setNowItem(state,text){
      state.nowItem=text
    },
    setComponentName(state,name){
      state.currentComponent=name
    }
  },
  actions: {
  },
  modules: {
  }
})
