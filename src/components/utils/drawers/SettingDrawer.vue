<template>
    <div class="flex flex-col py-4">
        <!-- content -->
        <div>
            <div v-for="item in list"
            class="hover:shadow-y cursor-pointer"
            :class="{'px-8 py-5': item.visible}">
                <Navigation :navigation="item" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAccountStore } from '@/stores/account'
import { useUtilsStore } from '@/stores/utils'
import Navigation from '@/components/utils/Navigation.vue'
import { darkMode } from '@/assets/js/utils/navigations'
import { BIconGlobe as Language, BIconPersonSquare as Account,
BIconChevronRight as Arrow } from 'bootstrap-icons-vue'
import { drawers } from '@/assets/js/utils/language'
import { toAccount } from '@/assets/js/utils'

const router = useRouter()
const account = useAccountStore()
const utils = useUtilsStore()
const connected = account.getConnected
const address = account.getAddress
const language = utils.getLanguage

const list = [
    {
        icon: Account,
        label: drawers.setting.myAccount,
        right: {
            data: null,
            component: Arrow,
            
        },
        navigate: () => toAccount(router, address.value, utils.closeDrawer),
        visible: connected.value
    },
    // {
    //     label: drawers.setting.myaccount[language.value],
    //     icon: Person,
    //     fn: () => {}
    // },
    // {
    //     label: common.switchaccount[language.value],
    //     icon: SwitchAccount,
    //     fn: () => {}
    // },
    // {
    //     label: common.disconnect[language.value],
    //     icon: Disconnect,
    //     fn: () => account.value.disconnect()
    // },
    {
        icon: Language,
        label: drawers.setting.language,
        right: {
            value: utils.getLanguage.value,
            component: Arrow
        },
        navigate: () => utils.openSubDrawer('languageSelection'),
        visible: true
    },
    darkMode
    
]

const emit = defineEmits(['data'])

emit('data', {title: drawers.setting.title})

</script>

<style lang="scss" scoped>
.list-item {
    @apply flex items-center justify-between cursor-pointer px-8 py-4 hover:shadow-y;
}
</style>