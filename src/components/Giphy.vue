<template>
    <div class="giphy">
        <h3>Giphy</h3>
        <ul>
            <li v-for="(gif, i) in gifs" :key="`gif-${i}`">
                <img :src="gif.images.original.url" :alt="gif.title">
            </li>
        </ul>
    </div>
</template>

<script>

    import API from '../api';

    export default {
        name: 'Giphy',
        props: {
            words: Array
        },
        data() {
            return {
                gifs: []
            }
        },
        methods: {
            getGifs() {
                this.words.forEach(item => {
                    const word = item.value.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    API.giphy.get(`search?q=${word}&limit=5`)
                        .then(res => {
                            if (res.data && res.data.data) this.gifs.push(...res.data.data)
                        })
                });
            }
        },
        mounted() {
            this.getGifs()
        }
    }

</script>

<style lang="scss">
    .giphy {
        margin-top: 60px;

        ul {
            display: flex;
            flex-wrap: wrap;
        }

        li {
            margin-bottom: 20px;

            @media screen and (min-width: 1024px) {
                width: calc((100% - 60px) / 4);

                &:not(:nth-of-type(4n)) {
                    margin-right: 20px;
                }
            }

            @media screen and (min-width: 601px) and (max-width: 1023px) {
                width: calc((100% - 40px) / 3);

                &:not(:nth-of-type(3n)) {
                    margin-right: 20px;
                }
            }

            @media screen and (min-width: 401px) and (max-width: 600px) {
                width: calc((100% - 10px) / 2);
                margin-bottom: 10px;

                &:not(:nth-of-type(2n)) {
                    margin-right: 10px;
                }
            }

            @media screen and (max-width: 400px) {
                width: 100%;
                margin-bottom: 10px;
            }
        }

        img {
            width: 100%;
            background-color: var(--color-1);
        }
    }
</style>
