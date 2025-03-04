<script setup lang="ts">
import { ref } from 'vue';
import {useCountStore} from '@/store'

defineProps<{
  msg: string
}>()


const countStore = useCountStore()

console.log(countStore.sum)

// countStore.$subscribe((mutation, state) => {
//   console.log('countStore发生变化了')
//   console.log(mutation)
//   console.log(state)
// })

countStore.$onAction(({
  name,
  store,
  args,
  after,
  onError
}) => {
  const startTime = Date.now()
  console.log("name:",name)
  console.log("store:",store)
  console.log("args:",args)
  console.log(`Start "${name}" with params [${args.join(', ')}]`)
  after((result) => {
    console.log(
      `Finished "${name}" after ${Date.now() - startTime}ms.\nResult:${result}.`
    )
  })
  onError((error) => {
    console.warn(`Failed "${name}" after ${Date.now() - startTime}ms.\nError:${error}.`)
  })
})

function add(){
  countStore.add()
}

function minus() {
  countStore.minus()
}

function patchObject() {
  countStore.$patch({
    sum: countStore.sum *3
  })
}
function patchFunction(){
  countStore.$patch((state) => {
    state.sum = state.sum * 10
  })
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
    <p>{{ countStore.sum }}</p>
    
    <button @click="add">+</button>
    <button @click="minus">-</button>
    <button @click="patchObject">$patch.object</button>
    <button @click="patchFunction">$patch.function</button>

    <p>{{ countStore.double }}</p>
    <p>{{ countStore.doublePlusOne }}</p>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
