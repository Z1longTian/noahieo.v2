// this file doesn't contain a store but pinia store plugins
const persister = ({ store }) => {
    // get states from session storage
    const states = JSON.parse(sessionStorage.getItem(store.$id))
    // if data found
    if(states) {
        // replace the store's states
        store.$patch(states)
    }
    
    // start subscribing
    store.$subscribe((mutation, state) => {
        // when there's a change to the states, store it in the storage
        sessionStorage.setItem(mutation.storeId, JSON.stringify(state))
    })
}

export {
    persister
}