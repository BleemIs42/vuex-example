import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex)

 const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--
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
