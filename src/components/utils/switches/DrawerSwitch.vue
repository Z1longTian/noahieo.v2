<template>
    <div v-show="currentDrawer[0] != drawer" 
    @click="utils.openDrawer(drawer)"
    class="cursor-pointer text-2xl hover:text-zinc-900 dark:hover:text-zinc-50">
        <div v-if="drawer == 'wallet'"
        class="">
            <Wallet />
        </div>
        <div v-if="drawer == 'setting'">
            <Setting />
        </div>
        <div v-if="drawer == 'mail'"
        class="relative">
            <!-- dot -->
            <div v-show="mails && unreadmails.length > 0"
            class="absolute rounded-full p-1.5 -top-0.5 -right-1 bg-red-500 "></div>
            <Mail />
        </div>
        <div v-if="drawer == 'menu'"
        class="text-4xl">
            <MobileMenu />
        </div>
    </div>
    <div v-show="currentDrawer[0] == drawer"
    class="cursor-pointer text-3xl hover:text-zinc-900 dark:hover:text-zinc-50">
        <Close @click="utils.closeDrawer"/>
    </div>
    
</template>

<script setup>
import { ref, computed} from 'vue'
import { useUtilsStore } from '@/stores/utils'
// import { accountStore } from '@/stores/account'
import { BIconWalletFill as Wallet, BIconGridFill as Setting,
BIconEnvelopeFill as Mail, BIconList as MobileMenu,
BIconX as Close } from 'bootstrap-icons-vue'

const props = defineProps({
    drawer: String
})

const { drawer } = props
const utils = useUtilsStore()
const currentDrawer = ref(utils.getDrawerData)

// const account = accountStore()
// const mails = account.getMails
// const unreadmails = computed(() => {
//     if(mails.value) {
//         return mails.value.filter((mail) => !mail.read)
//     }
//     return []
// })
</script>

<style lang="scss" scoped>

</style>