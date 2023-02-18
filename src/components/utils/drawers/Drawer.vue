<template>
    <div class="fixed h-screen right-0 top-16 overflow-y-auto 
    transition-all duration-300 bg-zinc-50 drak:bg-zinc-900"
    :class="showDrawer ? 'visible w-screen md:w-1/3' : 'invisible w-0'">
        <!-- go Back -->
        <div v-if="drawer.length > 1"
            class="relative flex justify-center items-center cursor-pointer
            shadow-lg py-4">
                <GoBack class="absolute left-2 font-extrabold text-xl"/>
                <p v-if="drawerData">{{drawerData.title}}</p>
            </div>
        <component @data="getDrawerData" :is="drawers[drawer.at(-1)]" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUtilsStore } from '@/stores/utils'
import { BIconChevronLeft as GoBack } from 'bootstrap-icons-vue'
import TestDrawer from './TestDrawer.vue';
const utils = useUtilsStore()
const showDrawer = utils.getDrawer
const drawer = utils.getDrawerData
const drawerData = ref()

const drawers = {
    'test': TestDrawer
}

function getDrawerData(e) {
    drawerData.value = e
}

function closeSubDrawer() {
    utils.closeSubDrawer()
    drawerData.value = ''
}
</script>

<style lang="scss" scoped>
</style>