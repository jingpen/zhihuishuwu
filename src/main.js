import Vue from 'vue'
import App from './App.vue'
import router from './router'
import  VueAxios from 'vue-axios'
import axios  from 'axios'
// axios.defaults.baseURL='/api'
// axios.defaults.baseURL='/api'


Vue.config.productionTip = false
Vue.use(VueAxios,axios)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
