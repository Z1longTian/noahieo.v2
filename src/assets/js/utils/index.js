// utilities
import { NFTStorage, Blob } from "nft.storage"
import { useUtilsStore } from "@/stores/utils"
import { web3Utils } from "@/assets/js/contracts"
import { computed } from "vue"
// 
// constants
// 
export const CHAIN_ID = '0x61' // 97
export const CHAIN_PARAMS = [{
    chainId: CHAIN_ID,
    chainName: 'Binance Smart Chain Testnet',
    nativeCurrency: {
        symbol: "tBNB",
        decimals: 18
    },
    rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/']
}]

// File Upload validation, file size, file acceptance
export const fileMaxSize = 30 //MB
export const fileAcceptTypes = [ 'image/png', 'image/jpeg']

// 
// methods
// 
// modal notifier
export const notify = (type, text) => {
    const utils = useUtilsStore()
    utils.openModal({
        modal: 'info',
        type,
        text
    })
}

// start and end loading
export const startLoading = (msg) => {
    const utils = useUtilsStore()
    utils.startLoading(msg)
}
export const endLoading = () => {
    const utils = useUtilsStore()
    utils.endLoading()
}

// upload file to ipfs, return its cid
export const uploadToIPFS = async (content) => {
    // load file
    const file = new Blob([content])
    // create a NFT storage client
    const client = new NFTStorage({ token: import.meta.env.VITE_NFT_STORAGE_API })
    // call client.store
    const cid = await client.storeBlob(file)
    return cid 
}

export const debounce = (fn, wait) => {
    let timer
    return (arg) => {
        clearTimeout(timer)
        timer = setTimeout(() => fn(arg), wait)
    }
}

export const fromWei = (wei) => web3Utils.fromWei(wei, 'ether')

export const toAccount = (router, address, fn) => {
    router.push({
        name: 'Account',
        params: {
            address,
        }
    })
    fn && fn()
}

export const isOwned = (account, address) => {
    return computed(() => 
    account.getConnected.value &&
    account.getAddress.value.toLowerCase() === address.toLowerCase())
}
