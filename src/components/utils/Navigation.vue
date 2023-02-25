<!-- This component displays the navigation obj 
navigation obj = {
 *      icon, component
 *      label, - language obj,
 *      
 *      right {
 *          value,
 *          component
 *      },
 *      navigate - fn,
 *      visible - bool,
 *      child: [ navigation objs ]
 * }
-->

<template>
    <div v-if="navigation.visible" @click="navigation.navigate"
    class="flex justify-between items-center">
        <!-- left -->
        <div class="flex items-center gap-x-4">
            <component :is="navigation.icon"  
            v-if="navigation.icon && icon"/>
            <p class="text-base">
                {{ navigation.label[language] }}
            </p>
        </div>
        <!-- right -->
        <div v-if="navigation.right && right" 
        class="flex items-center gap-x-4">
            <p v-if="navigation.right.value">
                {{ navigation.right.value}}
            </p>
            <component :is="navigation.right.component" 
            v-if="navigation.right.component"/>
        </div>

    </div>
</template>

<script setup>
import { useUtilsStore } from '@/stores/utils'
const { navigation, icon, right } = defineProps({
    navigation: Object,
    icon: {
        type: Boolean,
        default: true,
    },
    right: {
        type: Boolean,
        default: true,
    }
})

const utils = useUtilsStore()
const language = utils.getLanguage
</script>

<style lang="scss" scoped>
</style>