import Vue from 'vue'
import Panel from './index.vue'
Panel.install=function(){
  Vue.component(Panel.name,Panel)
}

export default Panel