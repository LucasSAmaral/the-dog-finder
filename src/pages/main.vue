<template>
    <div class="main__container">
        <Header title="The Dog Finder" subtitle="Everything about your pet"></Header>
        <itemRaca></itemRaca>
    </div>
</template>

<script>
import Header from '@/components/header'
import itemRaca from '@/components/itemRaca'
export default {
    name: 'Main',
    components: {Header, itemRaca}
}
</script>

<style lang="scss">

</style>
