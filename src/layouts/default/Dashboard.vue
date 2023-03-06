<template>
  <v-card>
    <v-layout>
      <v-app-bar color="surface-variant" title="Student Exams Project">
        <template v-slot:append>
          <v-btn @click="logout" color="red" variant="outlined"> <v-icon icon="mdi-logout"/>Logout</v-btn>
        </template>
      </v-app-bar>
      <sidebar-menu></sidebar-menu>
      <v-main style="min-height: 300px; height: 100vh;">
        <router-view />
      </v-main>
    </v-layout>
  </v-card>
</template>
<script setup>
  import {useAppStore} from "@/store/app";
  import {useRouter} from "vue-router";
  import  SidebarMenu from '@/components/SidebarMenu.vue'

  const router = useRouter()
  const store = useAppStore()
  const logout = () => {
    store.logout()
    router.push('/')

  }

</script>

<style scoped>

</style>
