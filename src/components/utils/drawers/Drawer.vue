<template>
    <div class="fixed h-screen right-0 top-16 overflow-y-auto 
    transition-all duration-300 bg-zinc-50 dark:bg-zinc-900"
    :class="showDrawer ? 'visible w-screen md:w-1/3' : 'invisible w-0'">
        <!-- go Back -->
        <div 
            class="relative flex items-center cursor-pointer mx-8 py-6"
            :class="drawer.length > 1 ? 'justify-center' : 'justify-start'">
                <GoBack v-if="drawer.length > 1" @click="utils.closeSubDrawer"
                    class="absolute left-0 font-extrabold text-xl"/>
                <p v-if="drawerData" class="text-2xl">{{drawerData.title[language]}}</p>
            </div>
        <component @data="getDrawerData" :is="drawers[drawer.at(-1)]" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUtilsStore } from '@/stores/utils'
import { BIconChevronLeft as GoBack } from 'bootstrap-icons-vue'
import SettingDrawer from '@/components/utils/drawers/SettingDrawer.vue'
import LanguageSelectionDrawer from '@/components/utils/drawers/LanguageSelectionDrawer.vue'
import NavigationDrawer from '@/components/utils/drawers/NavigationDrawer.vue'
const utils = useUtilsStore()
const language = utils.getLanguage
const showDrawer = utils.getDrawer
const drawer = utils.getDrawerData
const drawerData = ref()

const drawers = {
    'setting': SettingDrawer,
    'languageSelection': LanguageSelectionDrawer,
    'navigation': NavigationDrawer
}

function getDrawerData(e) {
    drawerData.value = e
}

function closeSubDrawer() {
    utils.closeSubDrawer()
    drawerData.value = ''
}
</script>

<style lang="scss" scoped>
</style>