import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import router from './router'
import VueResource from 'vue-resource'
import App from './App'

Vue.use(VueResource)

new Vue({
    store,
    router,
    ...App
}).$mount('#app')