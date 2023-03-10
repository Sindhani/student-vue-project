// Utilities
import {defineStore} from 'pinia'

export const useAppStore = defineStore('app', {
  persist: true,
  state: () => ({
    user: null
  }),
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    login(payload) {
      this.user = payload
    },
    logout() {
      this.user = null
    }
  }
})
