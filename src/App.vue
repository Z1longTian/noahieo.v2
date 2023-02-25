<template>
    <div :class="{'dark': darkMode}">
        <div class="relative font-poppins color_transition
        bg-zinc-100 dark:bg-zinc-800
        base-text-color">

            <!-- utilities -->
            <Drawer class="z-30"/>
            <Loading class="z-50" />
            <Modal class="z-30" />
            <Overlay class="z-20"/>

            <!-- header -->
            <Header class="z-30" />
            
            <!-- content -->
            <RouterView class="z-0 min-h-[200vh]"/>

            <!-- footer -->
            <Footer />
        </div>
        
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { useUtilsStore } from '@/stores/utils'
import Overlay from '@/components/utils/Overlay.vue'
import Header from '@/components/header/Header.vue'
import Drawer from '@/components/utils/drawers/Drawer.vue'
import Loading from '@/components/utils/loadings/Loading.vue'
import Modal from '@/components/utils/modals/Modal.vue'
import Footer from '@/components/footer/Footer.vue'
const utils = useUtilsStore()
const darkMode = utils.getDarkMode
</script>

<style lang="scss" scoped>

</style>