import Vue from 'vue'
import './plugins/'
import App from './App.vue'
import './stylus/main.styl'
import router from './router'
import store from './store/'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
