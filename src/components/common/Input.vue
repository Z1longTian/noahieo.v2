<template>
    <div class=" appearance-none relative w-full flex items-center rounded-lg
    text-zinc-900">
        <div v-if="showSearch"
        class="absolute left-0 pl-3">
            <SearchIcon />
        </div>
        <input v-model="input" @input="inputHandler" @change="changeHandler"
        @keypress.enter="enterPressed" @blur="loseFocus" @focus="gainFocus"
        :type="type" :placeholder="placeholder" :maxlength="limit" rows="4" 
        :class="[classes,
        showSearch ? 'pl-10' : 'px-2']"
        class="py-2.5 w-full outline-none rounded-lg 
        bg-white border
        placeholder:text-zinc-700
        focus:border focus:border-blue-500">
        <div v-if="limit && showLength"
        class="text-xs absolute right-0 m-1 text-zinc-500 transition-all duration-300"
        :class="{'dark:text-zinc-50 text-zinc-900 translate-y-[200%]' :input}">
            {{ input.length }}/{{ limit }}
        </div>
        <div v-if="showClear && input"  @mousedown="resetInput"
        class="absolute right-0 cursor-pointer">
            <ClearIcon  class="m-1 text-2xl"/>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { debounce } from '@/assets/js/utils'
import { BIconX as ClearIcon, BIconSearch as SearchIcon} from 'bootstrap-icons-vue'

const emit = defineEmits([
    'debounce',
    'change',
    'blur',
    'focus',
    'reset',
    'key.enter'
])

const props = defineProps({
    classes: String,
    type: String, // text || textarea || number
    placeholder: String,
    limit: Number,
    showSearch: Boolean,
    showLength: Boolean,
    showClear: Boolean,
    title: String,
    delay: Number, // in ms, debounce delay
})

const input = ref('')

const { classes, type, placeholder, limit, showLength, showClear, delay } = props

const inputHandler = (e) => {
    if(delay && delay > 0) {
        debounceHandler(e)
    }
}

const debounceHandler = debounce(() => {
    if(type == 'number') {
        emit('debounce', input.value)
    } else {
        if(input.value.trim() !== '') {
            emit('debounce', input.value.trim())
        }
    }
    
}, delay)

const changeHandler = () => {
    emit('change', input.value)
}

const enterPressed = () => {
    emit('key.enter', input.value)
}

const loseFocus = () => {
    emit('blur', input.value)
}

const gainFocus = () => {
    emit('focus')
}

const resetInput = () => {
    reset()
    emit('reset', input.value)
}

function reset() {
    input.value = ''
}

defineExpose({
    reset,
})

</script>

<style lang="scss" scoped>
// input::-webkit-outer-spin-button,
// input::-webkit-inner-spin-button {
//     -webkit-appearance: none;
//     margin: 0;
// }
// input[type=number]{
//     -moz-appearance: textfield;
// }
</style>