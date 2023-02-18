// utilities
import { NFTStorage, Blob } from "nft.storage"
import { useUtilsStore } from "@/stores/utils"

// 
// constants
// 
const CHAIN_ID = '0x61' // 97
const CHAIN_PARAMS = [{
    chainId: CHAIN_ID,
    chainName: 'Binance Smart Chain Testnet',
    nativeCurrency: {
        symbol: "tBNB",
        decimals: 18
    },
    rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/']
}]

// File Upload validation, file size, file acceptance
const fileMaxSize = 30 //MB
const fileAcceptTypes = [ 'image/png', 'image/jpeg']

// 
// methods
// 
// modal notifier
const notify = (type, text) => {
    const utils = useUtilsStore()
    utils.openModal({
        modal: 'info',
        type,
        text
    })
}

// start and end loading
const startLoading = (msg) => {
    const utils = useUtilsStore()
    utils.startLoading(msg)
}
const endLoading = () => {
    const utils = useUtilsStore()
    utils.endLoading()
}

// upload file to ipfs, return its cid
const uploadToIPFS = async (content) => {
    // load file
    const file = new Blob([content])
    // create a NFT storage client
    const client = new NFTStorage({ token: import.meta.env.VITE_NFT_STORAGE_API })
    // call client.store
    const cid = await client.storeBlob(file)
    return cid 
}

const debounce = (fn, wait) => {
    let timer
    return (arg) => {
        clearTimeout(timer)
        timer = setTimeout(() => fn(arg), wait)
    }
}

export {
    // constants,
    CHAIN_ID,
    CHAIN_PARAMS,
    fileMaxSize,
    fileAcceptTypes,
    // methods
    notify,
    startLoading,
    endLoading,
    debounce,
    uploadToIPFS,
}