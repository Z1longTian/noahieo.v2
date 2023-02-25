/**
 * url : {
 *      method: post || get || delete || put,
 *      url: url address
 * }
 */
const urls = {
    // configs
    configs: {
        method: 'get',
        url: () => '/platform/configs'
    },
    // account
    accountCount: {
        method: 'post',
        url: () => '/account/count'
    },
    getAccount: {
        method: 'get',
        url: (address) => `/account/${address}`
    },
    connectWallet: { // data: { address }
        method: 'post',
        url: () => '/account/connect',
    },
    updName: {
        method: 'put', // data: { address, nickname }
        url: () => '/account/updname'
    },
    like: {
        method: 'post', // data: { address, tokenid }
        url: () => '/account/like'
    },
    unlike: {
        method: 'post', // data: { address, tokenid }
        url: () => '/account/unlik'
    },
    getSysBalance: {
        method: 'get', //
        url: (address) => `/account/${address}/balance`
    },
    getMails: {
        method: 'get', //
        url: (address) => `/mail/${address}`
    },
    readMail: {
        method: 'post', // data: { address, _id }
        url: () => '/mail/read',
    },
    readAllMails: {
        method: 'post', // data: { address }
        url: () => '/mail/readall'
    },
    deleteMail: {
        method: 'delete', // data: { address, _id }
        url: () => '/mail/delete'
    },
    deleteAllMails: {
        method: 'delete', // data: { address }
        url: () => '/mail/deleteread'
    },
    accSearch: {
        method: 'post', // data: { page, page_size, sort, key}
        url: () => '/account/search'
    }

}

export default urls