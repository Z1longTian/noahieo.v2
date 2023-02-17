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
    

    const showDrawer = ref(false)
    const showModal = ref(false)
    
    const showImg = ref(false)
    const showLoading = ref(false)

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
        // dark mode
        getDarkMode,
        toggleDarkMode,
        // language
        language,
        getLanguage,
    }
})