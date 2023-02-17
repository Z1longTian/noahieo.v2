<template>
    <div class="fixed inset-0 transition-all duration-300 grid place-items-center"
    :class="showLoading ? 'visible opacity-100' : 'invisible opacity-0'">
        <DivLoading :msg="msg" size="lg" :key="msg" class="text-zinc-50"/>
    </div>
</template>

<script setup>
import { useUtilsStore } from '@/stores/utils'
import DivLoading from '@/components/utils/loadings/DivLoading.vue'

const utils = useUtilsStore()
const showLoading = utils.getLoading
const msg = utils.getLoadingMsg
</script>

<style lang="scss" scoped>

</style>