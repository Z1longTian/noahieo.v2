<template>
    <div class="color_transition bg-white dark:bg-zinc-900 px-[5%] py-[3%]">
        <!-- join community -->
        <div class="flex flex-col gap-y-4  items-center">
            <p class="text-2xl md:text-4xl text-zinc-700 dark:text-zinc-300 font-serif font-extrabold">{{footer.join[language]}}</p>
            <div class="flex flex-wrap justify-center gap-6">
                <div v-for="socialMedia in iconList">
                    <component :is="socialMedia.icon" 
                    class="fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300 hover:fill-zinc-700 text-4xl cursor-pointer"/>
                </div>
            </div>
        </div>
        <!-- links -->
        <div
        class="flex flex-wrap justify-center md:justify-between border-y border-zinc-400 dark:border-zinc-700 py-10 my-6 gap-8">
            <!-- left -->
            <div
            class="w-full md:w-1/3 space-y-6">
                <div class="w-1/2">
                    <Logo />
                </div>
                <p class="break-words text-sm text-zinc-700 dark:text-zinc-300 w-full sm:w-[70%] leading-relaxed">
                    {{footer.description[language]}}
                </p>

            </div>
            <!-- right -->
            <div
            class="w-full md:w-[60%] flex flex-wrap justify-around gap-4" >
                <div v-for="item in linkList"
                class="flex flex-col gap-6 w-1/3 sm:w-1/5 items-start tabs ">
                    <p class="text-lg text-zinc-800 dark:text-zinc-100 w-full">{{item.title}}</p>
                    <div v-for="link in item.links"
                    class="text-left cursor-pointer hover_effect">
                        <p class="text-xs text-hover">
                            {{link.label}}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- copyright & policies -->
        <div class="flex flex-wrap justify-center sm:justify-between text-xs gap-2">
            <p>© 2023-2024 Original Station</p>
            <div class="flex gap-4 cursor-pointer">
                <button class="hover_effect">{{footer.privacy[language]}}</button>
                <button class="hover_effect">{{footer.terms[language]}}</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUtilsStore } from '@/stores/utils'
import { BIconTelegram as TG, BIconFacebook as Fb,
BIconMessenger as Ms, BIconDiscord as Ds,
BIconEnvelopeFill as Email, BIconYoutube as Yt,
BIconTwitter as Tt } from 'bootstrap-icons-vue'
import Logo from '@/components/common/Logo.vue'
import { footer } from '@/assets/js/utils/language'

const utils = useUtilsStore()
const language = utils.getLanguage

const iconList = [
    {
        icon: TG,
        link: ''
    },
    {
        icon: Fb,
        link: ''
    },
    {
        icon: Ms,
        link: ''
    },
    {
        icon: Ds,
        link: ''
    },
    {
        icon: Email,
        link: ''
    },
    {
        icon: Yt,
        link: ''
    },
    {
        icon: Tt,
        link: ''
    },
]
const linkList = [
    {
        title: 'Market',
        links: [
            {
                label: 'All NFTs',
                link: ''
            },
            {
                label: 'Markets',
                link: ''
            },
            {
                label: 'NFT Evluation',
                link: ''
            }
            
        ]
    },
    {
        title: 'Resources',
        links: [
            {
                label: 'Help Center',
                link: ''
            },
            {
                label: 'Platform Status',
                link: ''
            },
            {
                label: 'Partners',
                link: ''
            },
            {
                label: 'Taxes',
                link: ''
            },
            {
                label: 'Newsletter',
                link: ''
            },
            {
                label: 'Docs',
                link: ''
            }
        ]
    },
    {
        title: 'Company',
        links: [
            {
                label: 'About',
                link: ''
            },
            {
                label: 'Careers',
                link: ''
            },
            {
                label: 'Grants',
                link: ''
            },
            {
                label: 'Ventures',
                link: ''
            },
        ]
    },
    {
        title: 'Statistics',
        links: [
            {
                label: 'Rankings',
                link: ''
            },
            {
                label: 'Activity',
                link: ''
            },
            {
                label: 'Most-valued',
                link: ''
            },
            {
                label: 'Most Traded',
                link: ''
            },
        ]
    },
]
</script>

<style lang="scss" scoped>

</style>