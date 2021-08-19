<template>
    <div class="favorites-page">
        <div class="wrapper">
            <h2>Mes favoris</h2>
            <p v-if="!favorites.length">Vous n'avez aucun son en favoris</p>
            <ul v-else>
                <li v-for="(favorite, i) in favorites" :key="`favorite-${i}`">
                    <SmallTrack :track="favorite"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    import {mapState} from 'vuex';
    import SmallTrack from "../components/SmallTrack";

    export default {
        name: 'Favorites',
        components: {SmallTrack},
        computed: {
            ...mapState(['favorites'])
        }
    }

</script>

<style lang="scss">
    .favorites-page {
        li {
            &:not(:last-of-type) {
                margin-bottom: 10px;
                padding-bottom: 10px;
                border-bottom: solid 1px var(--color-1);
            }
        }
    }
</style>
