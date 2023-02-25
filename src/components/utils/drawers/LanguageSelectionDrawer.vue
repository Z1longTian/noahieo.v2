<template>
    <div>
        <div v-for="item in languageList"
        @click="chooseLanguage(item.value)"
        class="flex justify-between items-center
        px-8 py-5 hover:shadow-y cursor-pointer">
            <p>
                {{ item.label }}
            </p>
            <div v-if="language === item.value">
                <Current class="text-xl fill-green-500"/>
            </div>
        </div>

    </div>
</template>

<script setup>
import { useUtilsStore } from '@/stores/utils'
import { languageList } from '@/assets/js/utils/language/languages'
import { drawers } from '@/assets/js/utils/language'
import { BIconCheckLg as Current } from 'bootstrap-icons-vue'

const emit = defineEmits(['data'])
const utils = useUtilsStore()
const language = utils.getLanguage

function chooseLanguage(val) {
    utils.setLanguage(val)
    // utils.closeDrawer()
}
emit('data', {title: drawers.setting.chooseLanguage})
</script>

<style lang="scss" scoped>

</style>