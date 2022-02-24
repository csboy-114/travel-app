import Vue from 'vue'
import App from './App.vue'
import Panel from './components/panel/index'
import router from './router'
import store from './store'

import './assets/styles/reset.scss'
import './assets/styles/base.scss'
import './assets/icons/iconfont.css'

Vue.config.productionTip = false
Vue.use(Panel)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
