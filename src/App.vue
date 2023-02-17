<template>
    <div :class="{'dark': darkMode}">
        <div class="relative font-poppins transition-colors duration-300
        bg-zinc-100 dark:bg-zinc-800
        text-zinc-700 dark:text-zinc-300">

            <!-- utilities -->
            <Overlay class="z-40"/>

            <!-- header -->
            <Header class="z-40" />
            
            <button @click="utils.openOverlay()"
            class="text-zinc-900">
                show
            </button>
            <!-- content -->
            <RouterView class="z-0 min-h-[200vh]"/>

            <!-- footer -->
            
        </div>
        
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { useUtilsStore } from '@/stores/utils'
import Overlay from '@/components/utils/Overlay.vue'
import Header from '@/components/header/Header.vue'

const utils = useUtilsStore()
const darkMode = utils.getDarkMode
</script>

<style lang="scss" scoped>

</style>