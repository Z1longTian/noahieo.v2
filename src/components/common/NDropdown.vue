<template>
    <Dropdown ref="dropdown" :offset="offset" :trigger="trigger">
        <template #header>
            <div class="group flex justify-between items-center py-4
            color_transition px-5 rounded-lg bg-zinc-50 dark:bg-zinc-700 shadow-lg" >
                    <div class="flex items-center gap-x-4">
                        <slot name="icon"></slot>
                        <div 
                        :class="{'transition-transform duration-300 group-hover:translate-x-4':hover}">
                            <slot name="header" ></slot>
                        </div>
                    </div>
                    
                    <div v-if="arrow"
                    class="transition-transform duration-300"
                    :class="{ 'rotate-90 transition-transform duration-300' : show }">
                        <Arrow class="text-lg"/>
                    </div>
                </div>
        </template>
        <div class="whitespace-nowrap w-fit rounded-lg px-5 py-4 bg-zinc-50 dark:bg-zinc-700 shadow-lg">
            <slot></slot>
        </div>
    </Dropdown>
</template>

<script setup>
import { ref, computed } from 'vue'
import { BIconChevronRight as Arrow } from 'bootstrap-icons-vue'
import Dropdown from '@/components/utils/Dropdown.vue'

const { offset, trigger, arrow } = defineProps({
    offset: String,
    trigger: String,
    arrow: Boolean,
    hover: Boolean,
})

const dropdown = ref(null)
const show = computed(() => dropdown.value ? dropdown.value.show : false)
</script>

<style lang="scss" scoped>
</style>