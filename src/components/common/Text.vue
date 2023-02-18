<!-- this file can auto translate text to set language and can display many types of text
eg. title, text, info -->
<template>
    <div :class="types[type]">
        <p v-if="text">
            {{ text[language] }}
        </p>
        <slot></slot>
    </div>
</template>

<script setup>
import { useUtilsStore } from '@/stores/utils'

const props = defineProps({
    type: {
        type: String,
        default: 'text'
    },
    text: Object, // text obj which contains text and its translations
})

const { type, text } = props

const utils = useUtilsStore()
const language = utils.getLanguage

const types = {
    info: 'text-xs text-zinc-500',
    text: '',
    title: ''
}
</script>

<style lang="scss" scoped>

</style>