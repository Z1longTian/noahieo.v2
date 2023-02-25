<template>
    <div class="flex items-center gap-x-4 lg:gap-x-8">
        <div v-for="item in menus">
            <Navigation :navigation="item" :icon="false" :right="false"/>
        </div>

    </div>
</template>

<script setup>
import { useUtilsStore } from '@/stores/utils'
import { menus } from '@/assets/js/utils/navigations'
import Navigation from '@/components/utils/Navigation.vue'

const utils = useUtilsStore()
const language = utils.getLanguage
</script>

<style lang="scss" scoped>

</style>