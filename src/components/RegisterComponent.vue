<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-sheet width="300" class="mx-auto">
        <h2 class="my-2">Register</h2>
        <v-form @submit.prevent>
          <v-text-field
            v-model="form.email"
            label="email"
          ></v-text-field>
          <v-text-field
            v-model="form.password"
            type="password"
            label="password"
          ></v-text-field>
          <div class="d-flex justify-space-between">
            <v-btn type="submit" block color="success" class="mt-2" @click="login()" :loading="loader">Register</v-btn>
          </div>
        </v-form>
      </v-sheet>
    </v-responsive>
  </v-container>
</template>

<script setup>
import {auth} from '@/plugins/firebase'
import {reactive, ref} from "vue";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {useRouter} from "vue-router";
import {useAppStore} from "@/store/app";

const store = useAppStore()
// call the action as a method of the store

const form = reactive({email: 'admin@dev.com', password: '123456'})
let loader = ref(false)
const toggleLoader = () => {
  loader.value = !loader.value
}
const router = useRouter()

const login = async () => {
  toggleLoader()
  const {user} = await createUserWithEmailAndPassword(auth, form.email, form.password)
  store.login(user)
  if (user.email) {
    await router.push('/students')
  }
  toggleLoader()

}


</script>
