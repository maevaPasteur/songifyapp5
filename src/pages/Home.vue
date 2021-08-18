<template>
    <div class="home-page">
        <div class="wrapper">
            <h2>Bonjour</h2>
            <form>
                <label for="song">Quel titre cherchez-vous ?</label>
                <input id="song" type="text" placeholder="Don't stop me now">
                <button class="btn" type="submit">Chercher</button>
            </form>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Home'
    }

</script>

<style lang="scss">
    .home-page {

    }
</style>
