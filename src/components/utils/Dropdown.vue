<template>
    <button @blur="off('click')" @mouseenter="on('hover')" @mouseleave="off('hover')"
    class="relative w-full">
        <!-- header -->
        <div @click="toggle('click')"
        class="cursor-pointer">
            <slot name="header" ></slot>
        </div>

        <!-- panel -->
        <div class="absolute w-full"
        :class="[
            show ?
            'transition-max-height duration-500 max-h-screen overflow-visible' :
            'transition-max-height duration-200 max-h-0 overflow-hidden ',
            `translate-y-${offset}`
        ]">
            <slot></slot>
        </div>

    </button>
</template>

<script setup>
import { ref } from 'vue'

const { offset, trigger } = defineProps({
    offset: {
        type: String,
        default: '0'
    },
    trigger: {
        type: String,
        default: 'click'
    }
})
// states
const show = ref(false)
const on = (e) => show.value = trigger === e ? true : show.value
const off = (e) => show.value = trigger === e ? false : show.value
const toggle = (e) => show.value = trigger === e ? !show.value : show.value

const close = () => show.value = false

defineExpose({
    show,
    close
})
</script>

<style lang="scss" scoped>

</style>