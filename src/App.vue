<template>
    <div id="app">
        <Layout>
            <router-view/>
        </Layout>
    </div>
</template>

<script>

    import Layout from './layouts/Layout.vue'

    export default {
        name: 'App',
        components: {
            Layout
        }
    }

</script>

<style lang="scss">
    @import 'src/assets/scss/styles.scss';
</style>
