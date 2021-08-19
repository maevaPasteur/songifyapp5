<template>
    <div class="song-page" v-if="song">
        <div class="wrapper">
            <div class="song-banner">
                <img :src="song.cover" :alt="song.track">
                <div>
                    <h2>{{ song.track }}</h2>
                    <p>Par {{ song.artist }}</p>
                    <p>Album {{ song.album }}</p>
                    <p>Langue {{ song.lang }}</p>
                </div>
            </div>
            <div class="song-lyrics" v-if="song.lyrics">
                <h3>Les paroles</h3>
                <div v-html="lyrics"></div>
                <p>{{ words.length }}</p>
            </div>
        </div>
    </div>
</template>

<script>

    import {mapState, mapActions} from 'vuex';

    export default {
        name: 'Song',
        data() {
            return {
                id: this.$route.params.id,
            }
        },
        computed: {
            ...mapState({
                song(state) {
                    return state.songs.find(s => s.id_track === this.id);
                }
            }),
            words() {
                if (!this.song.lyrics) return [];
                let lyrics = this.song.lyrics.lyrics.replaceAll(/ \[[\s\S]*?\]/g, '').replaceAll('\n', ' ').replaceAll('\r', ' ').replaceAll('.', ' ');
                // On garde uniquement les mots de plus de 3 lettres
                lyrics = lyrics.split(' ').filter(e => e.length > 4);
                let wordsCount = [];
                lyrics.forEach(word => {
                    let wordExisting = wordsCount.find(e => e.value === word);
                    if (wordExisting) {
                        wordExisting.count += 1
                    } else {
                        wordsCount.push({
                            value: word,
                            count: 1
                        })
                    }
                });
                // On renvoie un tableau contenant les 10 mots les plus utilisés
                return wordsCount.sort((a,b) => b.count - a.count).slice(0, 10);
            },
            lyrics() {
                let lyrics = this.song.lyrics.lyrics;
                if (this.words.length) {
                    this.words.forEach(word => {
                        lyrics = lyrics.replaceAll(word.value, `<strong>${word.value}</strong>`)
                    })
                }
                return lyrics
            }
        },
        methods: {
            ...mapActions(['getLyrics'])
        },
        mounted() {
            // Si le son n'a pas été cherché au préalable, retour à la page d'accueil
            if (!this.song) {
                this.$router.push({name: 'home'})

            } else if (!this.song.lyrics) {
                // On récupère les paroles
                this.getLyrics(this.song)
            }
        }
    }

</script>

<style lang="scss">
    .song-banner {
        display: flex;

        img {
            flex-shrink: 0;
            margin-right: 20px;
            width: 300px;
            height: 300px;
            border-radius: 6px;
            background-color: var(--color-1);
        }
    }

    .song-lyrics {
        margin-top: 60px;

        strong {
            font-weight: 400;
            background-color: var(--color-2);
            border-radius: 6px;
            padding: 2px 8px;
            color: #fff;
            margin: 0 0 4px;
            display: inline-block;
        }
    }
</style>
