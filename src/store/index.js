import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex)

 const store = new Vuex.Store({
    state: {
    },
    mutations: {
    },
    modules: {
        ...modules
    }
})

// if (module.hot) {
//   module.hot.accept(['./modules'], () => {
//     const newMutations = require('./modules').default
//     store.hotUpdate({
//       mutations: newMutations
//     })
//   })
// }

export default store
