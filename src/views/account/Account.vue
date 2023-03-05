<template>
    <div class="relative">
        <AccInfo />
        <AccountTabs />
    </div>
</template>

<script setup>
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
import { ref, watch, provide } from 'vue'
import { useAccountStore } from '@/stores/account'
import { useUtilsStore } from '@/stores/utils'
import { isOwned, updateTitle } from '@/assets/js/utils'
import { apiRequest } from '@/assets/js/api'
import AccInfo from '@/views/account/AccInfo.vue'
import AccountTabs from '@/views/account/AccountTabs.vue'

// utilities
const route = useRoute()
const router = useRouter()
const utils = useUtilsStore()
const account = useAccountStore()
// language
const language = utils.getLanguage
// active tab
const active = ref(0)
// account status
const address = route.params.address
const connected = account.getConnected
const connectedAddress = account.getAddress
const isOwner = isOwned(account, address)
const acc = (await apiRequest({target: 'getAccount',param: address})).data
updateTitle(acc.name)
provide('account', {
    connected,
    connectedAddress,
    isOwner,
    utils,
    route,
    router,
    language,
    acc,
})

// when user connects / disconnects their wallet refresh the page
watch(isOwner, () => {
    // set a delay for refreshing the page
    setTimeout(() => {
        router.go()
    }, 500)
})

</script>

<style lang="scss" scoped>

</style>