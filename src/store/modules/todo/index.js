export default {
    state: {
        list: [],
        count: 0
    },
    actions: {
        fethList: ({commit, state }, params) => {
            setTimeout(() => {
                const list = [{
                        id: 1,
                        name: '天心'
                    },
                    {
                        id: 2,
                        name: '天心心'
                    },
                    {
                        id: 3,
                        name: '天心心心'
                    },
                    {
                        id: 4,
                        name: '天心天心心'
                    }
                ]
                commit('SET_LIST', {
                    data: list
                })
            })
        },
        addCount:({commit}) => {
            commit('INCREMENT')
        },
        subCount: ({commit}) => {
            commit('DECREMENT')
        }
    },
    mutations: {
        SET_LIST: (state, payload) => {
            state.list = payload.data
        },
        INCREMENT: state => state.count++,
        DECREMENT: state => state.count--
    },
    getters: {
        listG: state => state.list
    }
}