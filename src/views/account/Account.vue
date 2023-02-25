<template>
    <div>
        {{ isOwner }}
    </div>
</template>

<script setup>
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
import { ref, computed, shallowRef, onBeforeMount, watch } from 'vue'
import { useAccountStore } from '@/stores/account'
import { useUtilsStore } from '@/stores/utils'
import { isOwned } from '@/assets/js/utils'
import { apiRequest } from '@/assets/js/api'

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
const accInfo = ref()

// 1. check if address is a valid web3 address
// 2. check if address is registered
// above are done in the server side
onBeforeMount(async () => {
    const res = await apiRequest('getAccount', {}, address)
    if(!res.succeeded) {
        router.push('/404')
    }
    accInfo.value = res.data
})

</script>

<style lang="scss" scoped>

</style>