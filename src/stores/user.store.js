import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  const decrement = () => {
    count.value--
  }
  const increment = () => {
    count.value++
  }

  return { count, increment }
})
