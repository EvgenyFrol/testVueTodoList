import '../src//style/style.scss'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/index'
import store from './store/index'
import Vuex from 'vuex'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Vuelidate)

new Vue({
  router: routes,
  store,
  render: h => h(App)
}).$mount('#app')
