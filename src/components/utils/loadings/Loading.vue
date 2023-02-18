<template>
    <div class="fixed inset-0 transition-all duration-300 grid place-items-center"
    :class="showLoading ? 'visible opacity-100' : 'invisible opacity-0'">
        <DivLoading size="lg" class="text-zinc-50" >
            {{ msg }}
        </DivLoading>
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