<template>
    <div class="color_transition sticky top-0 px-2 lg:px-8 h-16
    flex justify-between items-center gap-x-[5%]"
    :class="{'bg-white dark:bg-zinc-900 shadow-xl' : scrolled || showDrawer || home}">
        <!-- logo -->
        <div class="w-44">
            <Logo navigate/>
        </div>

        

        <div class="flex items-center gap-x-4">
            <div>
                <NMenu />
            </div>
            <div class="hidden lg:flex items-center gap-x-4 lg:gap-x-8 lg:justify-end">
                <Button v-if="!connected" @click="account.connect"
                type="plain" size="sm" :border="false">
                    {{ common.connect[language] }}
                </Button>

                <DrawerSwitch drawer="wallet" v-if="connected" />

                <DrawerSwitch drawer="mail" v-if="connected"/>

                <div class="hidden lg:block">
                    <DrawerSwitch drawer="setting" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useUtilsStore } from '@/stores/utils'
import { useAccountStore } from '@/stores/account'
import Logo from '@/components/common/Logo.vue'
import Button from '@/components/common/Button.vue'
import DrawerSwitch from '@/components/utils/switches/DrawerSwitch.vue'
import { common } from '@/assets/js/utils/language'
import NMenu from '@/components/header/NMenu.vue'

const utils = useUtilsStore()
const language = utils.getLanguage
const showDrawer = utils.getDrawer
const account = useAccountStore()
const connected = account.getConnected
const route = useRoute()
const home = computed(() => route.path !== '/')
const scrolled = ref(false)
window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50
})
</script>

<style lang="scss" scoped>

</style>