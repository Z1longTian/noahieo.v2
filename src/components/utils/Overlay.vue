<template>
    <div @click="closeUtils" 
        class="fixed inset-0 bg-black transition-all duration-500"
        :class="showOverlay ? 'visible opacity-60' : 'invisible opacity-0'">
    </div>
</template>

<script setup>
import { useUtilsStore } from '@/stores/utils'
const utils = useUtilsStore()
const showOverlay = utils.getOverlay

function closeUtils() {
    // utils.closeDrawer()
    // utils.closeModal()
    // utils.hideImgView()
    utils.closeOverlay()
}
</script>

<style lang="scss" scoped>

</style>