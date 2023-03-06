<template>
  <v-navigation-drawer
    permanent
  >
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
      :title="isAdmin"
      nav
    >
      <template v-slot:append>
        <v-btn
          variant="text"
          icon="mdi-chevron-left"
          @click.stop="rail = !rail"
        ></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        :prepend-icon="link.icon"
        :to="link.value"
        :value="link.value"
        v-for="link in links">
        {{ link.lable }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>

import {computed, ref} from "vue";
import {useAppStore} from "@/store/app";

const store = useAppStore()
const isAdmin = computed(() => {
  return store.getUser.email.includes('admin@dev.com') ? 'Admin' : 'Student'
})

const links = [
  {lable: 'Students', icon: 'mdi-home-city', value: '/students'},
  {lable: 'Exams', icon: 'mdi-bookshelf', value: '/exams'},
]
</script>

<style scoped>

</style>
