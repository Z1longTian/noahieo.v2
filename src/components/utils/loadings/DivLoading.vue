<template>
    <div class="flex flex-col items-center gap-y-3">
        <div class="border-t border-b border-4 rounded-full animate-spin
            border-t-red-500 border-b-blue-500"
            :class="circleSize[size]">
        </div>
        <div :class="textSize[size]">
            {{ msg }}
            <span v-if="msg">{{ dot }}</span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    msg: String,
    size: {
        type: String,
        default: 'sm' // md, lg
    } 
})

const { size, msg } = props

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
if(msg){
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