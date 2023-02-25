<template>
    <div class="fixed rounded-lg p-9
    left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
    transition-all duration-500
    bg-zinc-50 dark:bg-zinc-900"
    :class="showModal ? 'visible opacity-100' : 'invisible opacity-0'">
        <component v-if="modalData" :is="modals[modalData.modal]" />
    </div>
</template>

<script setup>
import { useUtilsStore } from '@/stores/utils'
import InfoModal from '@/components/utils/modals/InfoModal.vue'

const utils = useUtilsStore()
const showModal = utils.getModal
const modalData = utils.getModalData

const modals = {
    'info': InfoModal
}
</script>

<style lang="scss" scoped>

</style>