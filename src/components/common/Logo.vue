<template>
    <div @click="toLandingPage"
    class="cursor-pointer">
        <img src="@/assets/img/logo/logo.png" alt="logo"
        class="hidden dark:block">
        <img src="@/assets/img/logo/logo_dark.png" alt="logo"
        class="block dark:hidden">
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
    navigate: {
        type: Boolean,
        default: true
    }
})

const router = useRouter()
const { navigate } = props

function toLandingPage() {
    if(navigate) {
        router.push('/')
    }
}
</script>

<style lang="scss" scoped>
</style>