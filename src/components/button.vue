<template>
    <router-link :to=path>{{text}}</router-link>
</template>

<script>
export default {
    name: 'button',
    props: [
        'text',
        'path'
    ]
}
</script>

<style lang="scss">
    .button {
        padding: 12px 15px;
        border-radius: 3px;
        background-color: darkseagreen;
        color: #4d4d4d;
        text-decoration: none;

        &__container {
            margin-top: 32px;
        }
    }
</style>