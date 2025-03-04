import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from "pinia"



const app = createApp(App)

const pinia = createPinia()


function SecretPiniaPligin() {
  return { secret: 'the cake is a lie' }
}

pinia.use(SecretPiniaPligin)

app.use(pinia)
app.mount('#app')
