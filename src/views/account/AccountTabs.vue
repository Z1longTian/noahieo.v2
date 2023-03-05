<template>
    <div class="sticky top-16 bg-zinc-100 z-10 flex justify-start lg:justify-center gap-x-10 overflow-x-auto px-10 pb-1 pt-5
    border-b border-zinc-600">
        <div v-for="tab in tabs" class="hover_effect"
        :class="{'after:w-full after:left-0' : active == tab.index},
        {'hidden': !tab.visible}">
            <div v-if="tab.visible" @click="active=tab.index"
            class="group cursor-pointer flex items-center gap-x-3 mx-2
            text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50"
            :class="{'text-zinc-900 dark:text-zinc-50' : active==tab.index}">
                <!-- tab icon -->
                <component :is="tab.icon"
                class="text-lg group-hover:fill-zinc-900 dark:group-hover:fill-zinc-50"
                :class="active == tab.index ? 'fill-zinc-900 dark:fill-zinc-50' : 'fill-zinc-500' "/>
                <!-- tab name -->
                <p class="whitespace-nowrap">
                    {{ tab.label[language] }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, inject } from 'vue'
import BattleIcon from '@/components/common/BattleIcon.vue'
import { BIconController as Battle, BIconImages as Images, BIconHeart as Heart, 
BIconLightbulb as Lightbulb, BIconHourglassSplit as Hourglass, 
BIconClipboard2Data as Data, BIconTags as Tags} from 'bootstrap-icons-vue'
import { accountPage } from '@/assets/js/utils/language'

const { 
    utils,
    route,
    router,
    language,
    connected,
    connectedAddress,
    isOwner,
    acc
} = inject('account')

const active = ref(0)

const tabs = [
    {
        index: 0,
        label: accountPage.tabs.nfts,
        icon: Images,
        items: '',
        visible: true,
    },
    {
        index: 1,
        label: accountPage.tabs.creativity,
        icon: Lightbulb,
        items: '',
        visible: true,
    },
    {
        index: 2,
        label: accountPage.tabs.favourites,
        icon: Heart,
        items: '',
        visible: true,
    },
    {
        index: 3,
        label: accountPage.tabs.listings,
        icon: Tags,
        items: '',
        visible: true,
    },
    {
        index: 4,
        label: accountPage.tabs.battles,
        icon: BattleIcon,
        items: '',
        visible: true,
    },
    {
        index: 5,
        label: accountPage.tabs.pendings,
        icon: Hourglass,
        items: '',
        visible: isOwner.value,
    },
    {
        index: 6,
        label: accountPage.tabs.activities,
        icon: Data,
        items: '',
        visible: true,
    },
]

</script>

<style lang="scss" scoped>

</style>