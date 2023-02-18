// utilities store
// states returned will be stored in localstorage
import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useUtilsStore = defineStore('utils', () => {
    let timeoutid // modal timeout id

    // screen lock
    const screenLock = ref(false)
    const lock = () => {
        const x = window.scrollX
        const y = window.scrollY
        window.onscroll= () => window.scrollTo(x, y)
    }
    const unlock = () => window.onscroll = () => {}
    watch(screenLock, (val) => {
        val ? lock() : unlock()
    })

    // overlay
    const showOverlay = ref(false)
    const getOverlay = computed(() => showOverlay)
    const openOverlay = () => {
        screenLock.value = true
        showOverlay.value = true
    }
    const closeOverlay = () =>{
        screenLock.value = false
        showOverlay.value = false
    }
    
    // drawer
    const showDrawer = ref(false)
    const drawerData = ref([])
    const getDrawer = computed(() => showDrawer)
    const getDrawerData = computed(() => drawerData)
    const openDrawer = (data) => {
        if(showDrawer.value) {
            showDrawer.value = false
            setTimeout(() => {
                showDrawer.value = true
                drawerData.value = [data]
            }, 300)
        } else {
            showDrawer.value = true
            drawerData.value = [data]
        }
        openOverlay()
    }
    const closeDrawer = () => {
        showDrawer.value = false
        drawerData.value.length = 0
        closeOverlay()
    }

    // loading
    const showLoading = ref(false)
    const loadingMsg = ref('')
    const getLoading = computed(() => showLoading)
    const getLoadingMsg = computed(() => loadingMsg)
    const startLoading = (msg) => {
        loadingMsg.value = msg
        showLoading.value = true
        openOverlay()
    }
    const endLoading = () => {
        showLoading.value = false
        closeOverlay()
    }

    // modal
    const showModal = ref(false)
    const modalData = ref()
    const getModal = computed(() => showModal)
    const getModalData = computed(() => modalData)
    const openModal = (data) => {
        modalData.value = data
        showModal.value = true
        if(data.modal != 'info') {
            openOverlay()
        }
    }
    const closeModal = () => {
        // modalData.value = undefined
        showModal.value = false
        closeOverlay()
    }

    const showImg = ref(false)

    // dark mode
    const darkMode = ref(localStorage.getItem('darkMode') === 'true')
    const getDarkMode = computed(() => darkMode)
    const toggleDarkMode = () => {
        darkMode.value = !darkMode.value
        localStorage.setItem('darkMode', darkMode.value)
    }

    // language
    const language = ref((() => {
        const lan = localStorage.getItem('language')
        if(lan) return lan
        localStorage.setItem('language', 'en')
        return 'en'
    })())
    const getLanguage = computed(() => language)

    return {
        // screen lock
        screenLock,
        // overlay
        showOverlay,
        getOverlay,
        // drawer
        showDrawer,
        drawerData,
        getDrawer,
        getDrawerData,
        openDrawer,
        closeDrawer,
        // modal
        showModal,
        modalData,
        getModal,
        getModalData,
        openModal,
        closeModal,
        // loading
        getLoading,
        getLoadingMsg,
        startLoading,
        endLoading,
        // dark mode
        getDarkMode,
        toggleDarkMode,
        // language
        language,
        getLanguage,
    }
})