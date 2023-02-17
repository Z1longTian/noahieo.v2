// this file doesn't contain a store, but a pinia instance
import { createPinia } from "pinia"
import { persister } from "@/stores/plugins"

const pinia = createPinia()

pinia.use(persister)

export default pinia