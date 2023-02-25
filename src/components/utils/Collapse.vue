<template>
    <div>
        <!-- header -->
        <div @click="show = !show"
        class="cursor-pointer">
            <slot name="header" ></slot>
        </div>

        <!-- panel -->
        <div class="overflow-hidden"
        :class="[
            show ?
            'transition-max-height duration-500 max-h-screen' :
            'transition-max-height duration-200 max-h-0',
        ]">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const { appear } = defineProps({
    appear: {
        type: Boolean,
        default: false
    }
})
// states
const show = ref(appear)

defineExpose({
    show
})
</script>

<style lang="scss" scoped>

</style>