<template>
    <div class="layout" :class="{'dark-mode': isDarkMode}">
        <header class="header">
            <router-link :to="{name: 'home'}">
                <h1>Songify</h1>
            </router-link>
            <router-link :to="{name: 'favorites'}" class="btn">Mes favoris</router-link>
            <div class="header__switch" @click="switchMode">
                <span v-if="isDarkMode">Dark Mode</span>
                <span v-else>Light Mode</span>
                <button :class="{'active': isDarkMode}"></button>
            </div>
        </header>
        <main>
            <slot/>
        </main>
        <footer>
            <ul>
                <li>Projet développé par <a class="link-1" href="https://fr.linkedin.com/in/maeva-pasteur" target="_blank">Maëva Pasteur</a></li>
                <li>Lien du <a class="link-1" href="https://trello.com/b/xDr13iPE/ma%C3%ABva-exercice-songify" target="_blank">Trello</a></li>
                <li>Repertoire <a class="link-1" href="https://github.com/maevaPasteur/songifyapp5" target="_blank">GitHub</a></li>
            </ul>
        </footer>
    </div>
</template>


<script>

    export default {
        name: 'Layout',
        data() {
            return {
                isDarkMode: false
            }
        },
        methods: {
            switchMode() {
                this.isDarkMode = !this.isDarkMode
            }
        }
    }

</script>

<style lang="scss">
    .layout {
        position: relative;
        padding-top: 120px;
    }

    .header {
        padding: 0 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        top: 0;
        left: 0;
        height: 80px;
        background-color: var(--color-white);
        z-index: 1;
        width: 100%;
        border-bottom: solid 1px var(--color-1);

        @media screen and (max-width: 800px) {
            padding: 0 20px;
        }

        .btn {
            margin-right: 20px;
            margin-left: auto;
        }

        &__switch {
            display: flex;
            align-items: center;

            span {
                margin-right: 15px;
                text-transform: uppercase;
                font-size: 1.2rem;
                font-weight: 600;
            }

            button {
                background-color: #eee;
                height: 20px;
                border-radius: 15px;
                position: relative;
                transition: background-color ease .3s;
                cursor: pointer;
                width: 40px;

                &:before {
                    content: '';
                    display: block;
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    position: absolute;
                    left: 2px;
                    top: 2px;
                    background-color: #fff;
                    transition: left ease .3s;
                }

                &.active {
                    background-color: #42b983;

                    &:before {
                        left: calc(100% - 18px);
                    }
                }
            }
        }
    }

    main {
        position: relative;
        z-index: 0;
        padding-bottom: 40px;
        min-height: calc(100vh - 140px - 120px);
    }

    footer {
        padding: 40px;
        border-top: solid 1px var(--color-1);
        min-height: 140px;
        font-size: 1.4rem;

        @media screen and (max-width: 800px) {
            padding: 40px 20px;
        }

        ul {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }

        li {
            margin: 10px 20px;
        }
    }
</style>
