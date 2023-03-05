<template>
    <div class="w-fit">
        <BattleIcon v-if="icon=='battle'" 
        class="h-fit"
        :class="sizes[size]"/>
    </div>
</template>

<script setup>
import BattleIcon from '@/assets/svg/battle2.svg?component'
const { icon, size } = defineProps({
    icon: String,
    size: {
        type: String,
        default: 'sm' // sm || md || lg || half || full
    }
})
const sizes = {
    sm: 'w-4',
    md: 'w-10',
    lg: 'w-20',
    half: 'w-1/2',
    full: 'w-full'
}
</script>

<style lang="scss" scoped>

</style>