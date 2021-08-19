<template>
    <div id="app">
        <Layout>
            <router-view/>
        </Layout>
    </div>
</template>

<script>

    import Layout from './layouts/Layout.vue'
    import {mapActions} from 'vuex';

    export default {
        name: 'App',
        components: {
            Layout
        },
        methods: {
            ...mapActions(['getFavorites'])
        },
        mounted() {
            this.getFavorites()
        }
    }

</script>

<style lang="scss">
    @import 'src/assets/scss/styles.scss';
</style>
