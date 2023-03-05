<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-sheet width="300" class="mx-auto">
        <h2 class="my-2">Login</h2>
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
          <v-btn type="submit" color="success" block class="mt-2" @click="login()" :loading="loader">Submit</v-btn>
        </v-form>
      </v-sheet>
    </v-responsive>
  </v-container>
</template>

<script setup>
import {auth} from '@/plugins/firebase'
import {reactive, ref} from "vue";
import {signInWithEmailAndPassword} from 'firebase/auth'
import {useRouter} from "vue-router";

const form = reactive({email: 'admin@dev.com', password: '123456'})
let loader = ref(false)
const toggleLoader = () => {
  loader.value = !loader.value
}
const router = useRouter()

const login = async () => {
  toggleLoader()
  const {user} = await signInWithEmailAndPassword(auth, form.email, form.password)
  if (user.email) {
    await router.push('/students')
  }
  toggleLoader()

}


</script>
