<!-- 
    this component can improve its animation of panel coming down from the top,
    im not happy with its current approach, very messy. I want a clean and a smart
    way to solve it
 -->
<template>
    <Collapse ref="collapse" :appear="appear"
    class="color_transition px-5 w-full rounded-lg bg-zinc-50 dark:bg-zinc-700 shadow-lg">
        <!-- collapse header -->
        <template #header>
            <div class="group flex justify-between items-center py-4
            transition-[border] duration-300 border-zinc-300 dark:border-zinc-600" 
            :class="{ 'border-b' : show }">
                <div class="flex items-center gap-x-4">
                    <slot name="icon"></slot>
                    <div class="transition-transform duration-300 group-hover:translate-x-4">
                        <slot name="header" ></slot>
                    </div>
                </div>
                
                <div class="transition-transform duration-300"
                :class="{ 'rotate-90 transition-transform duration-300' : show }">
                    <Arrow class="text-lg"/>
                </div>
            </div>
        </template>
        <!-- content -->
        <div class="py-4">
            <slot></slot>
        </div>
    </Collapse>
</template>

<script setup>
import { ref, computed } from 'vue'
import { BIconChevronRight as Arrow } from 'bootstrap-icons-vue'
import Collapse from '@/components/utils/Collapse.vue'
const { appear } = defineProps({
    appear: {
        type: Boolean,
        default: false
    }
})
const collapse = ref(null)
const show = computed(() => collapse.value ? collapse.value.show : appear)
</script>

<style lang="scss" scoped>
</style>