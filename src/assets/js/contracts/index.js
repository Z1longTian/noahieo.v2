import Web3 from 'web3'
import abi from '@/assets/js/contracts/nft.json'

const address = import.meta.env.VITE_NFT_ADDRESS

const url = import.meta.env.VITE_RPC_URL

const web3 = new Web3(url)
const contract = new web3.eth.Contract(abi, address)

if(window.ethereum) {
    contract.setProvider(ethereum)
}

const web3Utils = web3.utils
const BN = web3Utils.BN

export {
    web3Utils
}