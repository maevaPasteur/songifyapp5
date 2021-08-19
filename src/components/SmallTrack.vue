<template>
    <div class="small-track" v-if="track">
        <router-link :to="{name: 'song', params: { id: track.id_track }}">
            <img :src="track.cover" :alt="track.track">
            <div>
                <p class="small-track__title">{{ track.track }}</p>
                <p class="small-track__artist">{{ track.artist }}</p>
            </div>
            <Heart :song="track"/>
        </router-link>
    </div>
</template>

<script>
    import Heart from "./Heart";
    export default {
        name: 'SmallTrack',
        components: {Heart},
        props: {
            track: Object
        }
    }
</script>

<style lang="scss">
    .small-track {

        a {
            display: flex;
            align-items: center;
        }

        img {
            width: 60px;
            height: 60px;
            object-fit: cover;
            margin-right: 10px;
            flex-shrink: 0;
            border-radius: 6px;
            background-color: var(--color-1);
        }

        &__title {
            font-weight: 600;
        }

        &__artist {
            font-size: 1.3rem;
        }

        p {
            margin-bottom: 0;
        }

        .heart {
            padding-left: 20px;
            margin-left: auto;
        }
    }
</style>
