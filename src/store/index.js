import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nowItem:'首页'
  },
  mutations: {
    setNowItem(state,text){
      state.nowItem=text
    }
  },
  actions: {
  },
  modules: {
  }
})
