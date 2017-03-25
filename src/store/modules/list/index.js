export default {
    state: {
        list: []
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
        }
    },
    mutations: {
        SET_LIST: (state, payload) => {
            state.list = payload.data
        }
    },
    getters: {
        listG: state => state.list
    }
}