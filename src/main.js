import Vue from 'vue'
import { vuetify } from './plugins/'
import App from './App.vue'
import router from './router'
// import store from './store/'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
