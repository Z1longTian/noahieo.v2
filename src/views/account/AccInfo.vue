<template>
    <div class="flex justify-center">
        <div class="py-[5%] space-y-2">
            <!-- name -->
            <div class="space-y-1">
                <p class="info">
                    {{ accountPage.name[language] }}
                </p>
                <!-- edit name -->
                <div v-show="!editing"
                class="flex justify-between items-center">
                    <p class="text">
                        {{ acc.name }}
                    </p>
                    <Edit @click="startEdit" v-if="isOwner"
                     class="icon cursor-pointer hover:text-blue-500" />
                </div>
                <div v-show="editing"
                class="flex justify-between items-center gap-x-4">
                    <Input ref="nameInput"
                    @debounce="(e) => name=e"
                    @reset="name=''"
                    :placeholder="accountPage.editPlaceholder[language]"
                    type="text" :limit="nameLimit"
                    showClear showLength :delay="200"/>
                    <div class="flex gap-x-2">
                        <Button size="sm" @click="cancelEdit">
                            <Cancel class="icon"/>
                        </Button>
                        <Button @click="changeName"
                        size="sm" type="primary" :disabled="!name" :key="name">
                            <Accept class="icon" />
                        </Button>
                    </div>
                </div>
                
            </div>
            <!-- address -->
            <div class="space-y-1">
                <p class="info">
                    {{ accountPage.address[language] }}
                </p>
                <p class="text">
                    {{ acc.address }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { inject } from 'vue'
import { apiRequest } from '@/assets/js/api'
import { accountPage } from '@/assets/js/utils/language'
import Input from '@/components/common/Input.vue'
import Button from '@/components/common/Button.vue'
import { BIconPencilSquare as Edit, BIconX as Cancel,
BIconCheck as Accept } from 'bootstrap-icons-vue'
import { refresh } from '@/assets/js/utils'
import { nextTick } from 'process'

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

const editing = ref(false)
const name = ref()
const nameInput = ref()
const nameLimit = 20

function startEdit() {
    editing.value = true
    nextTick(() => nameInput.value.focus())
}

function cancelEdit() {
    editing.value = false
    name.value = false
    nextTick(() => nameInput.value.reset())
}

async function changeName() {
    const res = await apiRequest({
        target: 'updName',
        data: { address: acc.address, nickname:name.value},
        loadingMsg: 'Test'
    })
    if(res.succeeded) {
        refresh(router)
        editing.value = false
        name.value = undefined
    }
}



</script>

<style lang="scss" scoped>

</style>