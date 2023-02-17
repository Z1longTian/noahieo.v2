<template>
    <div class="text-zinc-900">
       <button @click="utils.openModal('')">
            show MOdal
       </button>
    </div>
    
</template>

<script setup>
import { useUtilsStore } from '@/stores/utils'
const utils = useUtilsStore()

</script>

<style lang="scss" scoped>

</style>