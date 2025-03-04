import { defineStore } from "pinia";

interface User {
  id: number
  name: string
  age: number
}

const useCountStore = defineStore('count', {
  // 存储数据的地方
  state() {
    return {
      sum: 6,
      users: [
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Charlie', age: 28 }
      ] as User[]
    }
  },
  getters: {
    // 不使用this，它的类型时自动推断的
    double: (state) => state.sum * 2,

    // 1 使用ts
    doublePlusOne(): number {
      return this.double + 1
    },
    getUseById: (state) => {
      return (userId: number) => state.users.find(user => user.id === userId)
    }
  },

  actions: {
    add() {
      this.sum++
    },
    minus() {
      this.sum--
    }
  }
})

export default useCountStore