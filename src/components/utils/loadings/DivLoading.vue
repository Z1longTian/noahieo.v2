<template>
    <div class="flex flex-col items-center gap-y-3">
        <div class="border-t border-b border-4 rounded-full animate-spin
            border-t-red-500 border-b-blue-500"
            :class="circleSize[size]">
        </div>
        
        <div :class="textSize[size]">
            <slot></slot>
            <span v-if="slot">{{ dot }}</span>
        </div>
    </div>
</template>

<script setup>
import { ref, useSlots } from 'vue'

// if slot existed
const slot = useSlots().default !== undefined

const props = defineProps({
    size: {
        type: String,
        default: 'sm' // md, lg
    } 
})

const { size } = props

const circleSize = {
    sm: 'p-5',
    md: 'p-7',
    lg: 'p-9'
}

const textSize = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-lg'
}

const dot = ref('')
if(slot){
    setInterval(() => {
        dot.value += '.'
        if(dot.value.length > 5){
            dot.value = ''
        }
    }, 500)
}

</script>

<style lang="scss" scoped>

</style>