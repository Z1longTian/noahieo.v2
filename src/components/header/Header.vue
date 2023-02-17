<template>
    <div class="sticky top-0 px-2 lg:px-8 h-16
    flex justify-between items-center gap-x-[5%]
    transition-colors duration-500"
    :class="{'bg-white dark:bg-zinc-900' : scrolled || showDrawer}">
        <!-- logo -->
        <div class="w-44">
            <Logo navigate/>
        </div>
        I m header
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUtilsStore } from '@/stores/utils'
import Logo from '@/components/common/Logo.vue'

const utils = useUtilsStore()
const showDrawer = utils.showDrawer

const scrolled = ref(false)
window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50
})
</script>

<style lang="scss" scoped>

</style>