import './assets/main.css'

import { createApp, ref } from 'vue'
import App from './App.vue'

import { createPinia, type PiniaPluginContext } from "pinia"



const app = createApp(App)

const pinia = createPinia()


function SecretPiniaPligin(context: PiniaPluginContext) {
  console.log(context)
  return { secret: 'the cake is a lie' }
}

pinia.use(SecretPiniaPligin)

const sharedRef = ref('shared')

pinia.use(({ store }) => {
  store.hello = 'world'
  store.withRefHello = ref('world')
  store.shared = sharedRef

  console.log(store.withRefHello)
  console.log(store.shared)

  if (process.env.NODE_ENV === "development") {
    console.log(23423)
    store._customProperties.add('hello')
  }
})

app.use(pinia)
app.mount('#app')
