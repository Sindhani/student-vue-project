<template>
  <v-card>
    <v-layout>
      <v-app-bar color="surface-variant" title="Student Exams Project"></v-app-bar>
      <sidebar-menu></sidebar-menu>
      <v-main style="min-height: 300px; height: 100vh;">
        <router-view />
      </v-main>
    </v-layout>
  </v-card>
</template>
<script setup>
  import  SidebarMenu from '@/components/SidebarMenu.vue'
</script>

<style scoped>

</style>
