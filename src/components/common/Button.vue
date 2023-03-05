<template>
    <button :disabled="disabled"
    :class="[
        border ? 'border' : '',
        types[type],
        round ? 'rounded-full' : 'rounded-lg',
        sizes[size],
        {'cursor-not-allowed opacity-50 hover:bg-none' : disabled}
    ]">
        <slot></slot>
    </button>
</template>

<script setup>

const props = defineProps({
    type: {
        type: String,
        default: 'default'
    },
    size: {
        type: String,
        default: 'default'
    },
    round: Boolean,
    disabled: Boolean,
    border: {
        type: Boolean,
        default: true
    }
})

let { type, size, round, disabled, border } = props

const types = {
    primary: `text-zinc-50 bg-green-500 border-none ${ disabled ? '' : 'hover:bg-green-400'}`,
    danger: `text-zinc-50 bg-red-600 border-none ${ disabled ? '' : 'hover:bg-red-500'}`,
    warn: `text-zinc-50 bg-yellow-500 border-none ${ disabled ? '' : 'hover:bg-yellow-400'}`,
    info: `text-zinc-50 bg-blue-600 border-none ${ disabled ? '' : 'hover:bg-blue-500'}`,
    plain: `text-zinc-900 dark:text-zinc-50`,
    default: `border-zinc-800 dark:border-zinc-100 text-zinc-900 dark:text-zinc-50 
    ${ disabled ? '' : 'hover:bg-zinc-900 hover:text-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-zinc-900'}`
}

const sizes = {
    sm: 'w-fit p-1',
    md: 'w-fit px-10 py-2',
    lg: 'w-fit px-20 py-3',
    full: 'w-full py-3',
    half: 'w-1/2 py-3',
    quater: 'w-1/4 py-3',
    default: 'w-fit px-4 py-2'
}

</script>

<style lang="scss" scoped>

</style>