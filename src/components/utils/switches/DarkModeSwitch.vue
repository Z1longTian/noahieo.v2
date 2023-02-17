<template>
    <div @click="toggle"
    class="container rounded-full p-0.5 transition duration-300 group cursor-pointer"
    :class="[size,
        darkMode ? onBgColor : offBgColor
    ]">
        <div
        class="toggle flex w-1/2 h-full rounded-full transition-all ease-in-out duration-300 hover:w-2/3 group-active:w-full"
        :class="[
            darkMode ? 'float-right justify-start' : 'justify-end',
            darkMode ? onToggleColor : offToggleColor
        ]">
            <Sun v-show="!darkMode" class="h-full mr-2 fill-white" />
            <Moon v-show="darkMode"  class="h-full ml-2 fill-white"/>
        </div>
        <!-- Icons -->
            
    </div>
</template>

<script setup>
import { useUtilsStore } from '@/stores/utils'
import { BIconMoonStarsFill as Moon, BIconSunFill as Sun } from 'bootstrap-icons-vue'

const utils = useUtilsStore()
const darkMode = utils.getDarkMode

const size = 'w-16 h-8'
const onBgColor = 'bg-gray-700'
const offBgColor = 'bg-amber-200'
const onToggleColor = 'bg-gray-500'
const offToggleColor = 'bg-amber-400'
function toggle(){
    utils.toggleDarkMode()
}

</script>

<style lang="scss" scoped>
.container{
    box-shadow: inset 0px 5px 15px rgba(0,0,0,0.4), inset 0px -5px 15px rgba(255,255,255,0.4);
}
.toggle {
    box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
}
</style>