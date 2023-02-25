<template>
    <div>
        <div v-for="navigation in navigations">

        </div>
    </div>
</template>

<script setup>
import { useUtilsStore } from '@/stores/utils'

const emit = defineEmits(['data'])
const utils = useUtilsStore()
const drawerData = utils.getDrawerData

</script>

<style lang="scss" scoped>

</style>