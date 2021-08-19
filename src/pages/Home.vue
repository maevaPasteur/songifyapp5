<template>
    <div class="home-page">
        <div class="wrapper">
            <h2>Bonjour</h2>
            <form>
                <label for="song">Quel titre cherchez-vous ?</label>
                <input v-model="terms" id="song" type="text" placeholder="Don't stop me now">
            </form>
            <ul v-if="suggestions.length">
                <li v-for="(suggestion, i) in suggestions" :key="`suggestion-${i}`">
                    <SmallTrack :track="suggestion"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    import {mapState, mapActions} from 'vuex';
    import SmallTrack from "../components/SmallTrack";

    export default {
        name: 'Home',
        components: {SmallTrack},
        data() {
            return {
                terms: ''
            }
        },
        computed: {
            ...mapState(['suggestions'])
        },
        methods: {
            ...mapActions(['searchSongs', 'initSuggestions'])
        },
        watch: {
            terms() {
                this.searchSongs(this.terms);
            }
        },
        mounted() {
            this.initSuggestions()
        }
    }

</script>

<style lang="scss">
    .home-page {
        li {
            &:not(:last-of-type) {
                margin-bottom: 10px;
                padding-bottom: 10px;
                border-bottom: solid 1px var(--color-1);
            }
        }
    }
</style>
