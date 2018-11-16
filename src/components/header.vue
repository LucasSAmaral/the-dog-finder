<template>
    <div class="header__container">
        <h1 class="header__title">{{title}}</h1>
        <p class="header__subtitle">{{subtitle}}</p>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: [
        'title',
        'subtitle'
    ]
}
</script>

<style lang="scss">
    .header {
        &__container {
            text-align: center;
            padding: 30px 0;
            border-bottom: 1px solid #4d4d4d;
            background-color: #ffffff;
        }

        &__title {
            margin: 0 0 10px 0;
        }

        &__subtitle {
            margin: 0;
        }
    }
</style>
