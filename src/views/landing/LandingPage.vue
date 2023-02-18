<template>
    <div class="text-zinc-900">
        {{ count }}
       <Button @click="utils.openDrawer('test')" class="mt-[20vh]">
            Test
       </Button>
       
    </div>
    
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useUtilsStore } from '@/stores/utils'
import Button from '@/components/common/Button.vue'
import DrawerSwitch from '../../components/utils/switches/DrawerSwitch.vue'
import { web3Utils } from '@/assets/js/contracts'
const utils = useUtilsStore()
const count = ref(0)




</script>

<style lang="scss" scoped>

</style>