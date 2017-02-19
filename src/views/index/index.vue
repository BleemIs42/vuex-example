<template>
    <div>
        <h1 @click='start'>Index</h1>
        <router-link to="/example">/example</router-link>
        <h2>{{count}}</h2>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        computed: mapState({
            count: state => state.count
        }),
        methods: {
            start() {
                setInterval(() => {
                    this.$store.commit('increment')
                }, 1000)
            }
        }

    }
</script>