<template>
    <div>
        <router-link to="/example">/example</router-link>
        <p>
            <button @click='addCount()'>add</button>
            <button @click='subCount()'>sub</button>
        </p>
        <h2>{{count}}</h2>
        <div v-for="item in list">{{item.id}} --> {{item.name}}</div>
        <br>
        <div v-for="item in listG">{{item.id}} --> {{item.name}}</div>
    </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            isRuning: false
        }
    },
    created() {
        this.fethList()
    },
    methods: {
        ...mapActions([
            'fethList',
            'addCount',
            'subCount'
        ])
    },
    computed: mapState({
        count: state => state.todo.count,
        list: state => state.todo.list,
        ...mapGetters([
            'listG'
        ])
    })
}
</script>