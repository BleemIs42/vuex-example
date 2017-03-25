<template>
    <div>
        <h1 @click='addCount()'>Index</h1>
        <router-link to="/example">/example</router-link>
        <h2>{{count}}</h2>
        <div v-for="item in list">{{item.id}} --> {{item.name}}</div>
        <br>
        <div v-for="item in listG">{{item.id}} --> {{item.name}}</div>
    </div>
</template>
<script>
    import { mapState, mapActions, mapGetters } from 'vuex'
    export default {
        data(){
            return {
                isRuning: false
            }
        },
        created(){
            this.fethList()
        },
        methods: {
            ...mapActions([
                'fethList'
            ]),
            addCount() {
                this.$store.commit('increment')
            }
        },
        computed: mapState({
            count: state => state.count,
            list: state => state.list.list,
            ...mapGetters([
                'listG'
            ])
        })
    }
</script>