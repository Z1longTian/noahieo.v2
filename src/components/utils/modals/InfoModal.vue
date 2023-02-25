<template>
    <div class="flex flex-col items-center justify-center"
    @click="closeModal">
        <div v-if="content.type==='error'">
            <Close class="text-7xl stroke-1" />
        </div>
        <div v-if="content.type==='success'">
            <Check class="text-7xl stroke-1" />
        </div>
        <div>
            {{content.text}}
        </div>
       
    </div>
</template>

<script setup>
import { useUtilsStore } from '@/stores/utils'
import { BIconXLg as Close, BIconCheck2 as Check  } from 'bootstrap-icons-vue'

const utils = useUtilsStore()
const content = utils.getModalData
const display = setTimeout(() => {
    utils.closeModal()
    clearTimeout(display)
}, 2000)
function closeModal() {
    utils.closeModal()
    clearTimeout(display)
}
</script>

<style lang="scss" scoped>

</style>