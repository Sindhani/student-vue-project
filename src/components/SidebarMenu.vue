<template>
  <v-navigation-drawer
    permanent
    :rail="rail"
    @click="toggleMenu"
  >
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
      title="John Leider"
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
        {{link.lable}}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>

import {ref} from "vue";

let rail = ref(false)
  const toggleMenu = () => {
    rail.value = ! rail.value
  }
  const links = [
    {lable: 'Students', icon: 'mdi-home-city', value: '/students'},
    {lable: 'Exams', icon: 'mdi-bookshelf', value: '/exams'},
  ]
</script>

<style scoped>

</style>
