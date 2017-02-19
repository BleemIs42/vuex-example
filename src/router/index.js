import Vue from 'vue'
import Router from 'vue-router'
import routes from './map'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    scrollBehavior: () => ({
        y: 0
    }),
    routes: Object.keys(routes).reduce((previous, current) => {
            return (previous.push({
                path: current,
                ...routes[current]
            }), previous)
        }, [])
        .concat({
            path: '*',
            redirect: '/'
        })
})


router.beforeEach((to, from, next) => {

    next()
})

export default router