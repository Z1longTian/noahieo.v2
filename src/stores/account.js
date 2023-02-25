// account store
// states returned will be stored in session storage
import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { startLoading, endLoading, fromWei, notify } from '@/assets/js/utils'
import { apiRequest } from '@/assets/js/api'

export const useAccountStore =  defineStore('account', () => {
    
    // blockchain
    const metamaskInstalled = window.ethereum !== undefined
    const onBSC = ref(false)
    const chainid = ref(0)
    
    // account
    // connection
    const connected = ref(false)
    const getConnected = computed(() => connected)
    const connect = async () => {
        if( metamaskInstalled ) {
            if( onBSC.value || true ) {
                startLoading('Connecting')
                let accepted = true
                await ethereum.request({
                    method: "wallet_requestPermissions",
                    params: [{
                        eth_accounts: {}
                    }]
                }).catch(err => {
                    accepted = false
                    if(err.code == 4001) notify('error', 'Connection denied')
                    endLoading()
                })

                if(accepted) {
                    await ethereum.request({
                        method: 'eth_requestAccounts'
                    }).then(async (accounts) => {
                        // set address, connection, balance
                        address.value = accounts[0]
                        
                        const login = await apiRequest('connectWallet', { address: address.value })
                        login.succeeded ? connected.value = true : notify('error', 'Failed to Connect')
                        endLoading()
    
                    }).catch(err => {
                        console.log(2, err)
                        // notify
                        endLoading()
                    })
                }
                
            } else {
                // not on bsc
            }
        } else {

        }
    }
    const disconnect = () => connected.value = false
    
    // address
    const address = ref('')
    const getAddress = computed(() => address)
    const updateAccount = async (address) => {
        // get balance
        fetchBalance(address)
        const account = (await apiRequest('getAccount', {}, address)).data        
        name.value = account.name
        likes.value = account.likes
        mails.value = account.mails.sort((a, b) => b.date - a.date)
    }
    const resetAccount = () => {
        address.value = ''
        sysBalance.value = 0
        mails.value = []
        likes.value = []
    }
    watch(connected, (val) => {
        val ? updateAccount(address.value) : resetAccount()
    })
    // name
    const name = ref('unnamed')
    const getName = computed(() => name)

    // balance
    const sysBalance = ref(0)
    const getBalance = computed(() => sysBalance)
    const fetchBalance = async (address) => {
        sysBalance.value = fromWei((await apiRequest('getSysBalance', {}, address)).data)
    }
    // likes
    const likes = ref([])
    const getLikes = computed(() => likes)

    // mails
    const mails = ref([])
    const getMails = computed(() => mails)

    return {
        // account
        // connection
        connected,
        getConnected,
        connect,
        disconnect,

        // address
        address,
        getAddress,

        // name
        getName,

        // likes
        getLikes,

        // mails
        getMails,


    }
})