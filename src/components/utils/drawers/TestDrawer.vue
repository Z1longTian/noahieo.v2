<template>
    <div>
        test
    </div>
</template>

<script setup>
const emit = defineEmits(['data'])
emit('data', {title: 'test'})
</script>

<style lang="scss" scoped>

</style>