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
            <RouterView v-slot="{ Component }"
            class="z-0 min-h-[90vh]">
                <template v-if="Component">
                    <Suspense>
                    <!-- main content -->
                    <component :is="Component"></component>

                    <!-- loading state -->
                    <template #fallback>
                        <DivLoading size="lg" class="py-[40vh]">
                            Loading
                        </DivLoading>
                    </template>
                    </Suspense>
                </template>
            </RouterView>

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
import DivLoading from '@/components/utils/loadings/DivLoading.vue'
const utils = useUtilsStore()
const darkMode = utils.getDarkMode
</script>

<style lang="scss" scoped>

</style>