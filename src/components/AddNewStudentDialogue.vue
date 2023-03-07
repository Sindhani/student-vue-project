<template>
  <v-row justify="center">
    <v-dialog
      :model-value="modelValue"
      width="1024"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="Legal first name*"
                  v-model="form.name"
                  required
                ></v-text-field>

              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="Class"
                  v-model="form.class"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['15', '16', '17', '18', '19', '20', '21']"
                  label="Age*"
                  v-model="form.age"
                  required
                ></v-select>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-col
              cols="12"
              sm="6"
              md="6"
            >
              <v-text-field
                label="User Email"
                type="email"
                v-model="form.email"
                required
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="6"
            >
              <v-text-field
                label="User Password"
                type="password"
                v-model="form.password"
                required
              ></v-text-field>
            </v-col>

          </v-container>
        </v-card-text>
        <v-card-actions>
          <p v-if="errors" class="text-red">{{ errors }}</p>
          <v-spacer></v-spacer>

          <v-btn
            color="blue-darken-1"
            variant="text"

            @click="$emit('update:modelValue', false)"

          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            :loading="loader"
            @click="save"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script setup>
import {defineProps, defineEmits, reactive, ref} from "vue";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '@/plugins/firebase'

import {studentsRef} from '@/plugins/firebase'
import {addDoc, doc, setDoc, collection} from "firebase/firestore";
import {useFirestore} from "vuefire";

const form = reactive({
  name: null,
  age: null,
  class: null,
  email: null,
  password: null
})

defineProps(['modelValue'])

const emit = defineEmits(['update:modelValue'])
const loader = ref(false)
const errors = ref('')
const toggleLoader = () => {
  loader.value = !loader.value
}
const db = useFirestore()
// Add a new document in collection "students"
const save = async () => {
  toggleLoader()
  await createUser()
  const studentsRef = collection(db, 'students')
  await addDoc(studentsRef, {
    name: form.name,
    age: form.age,
    class: form.class,
  });
  toggleLoader()
  emit('update:modelValue', false)
}
const createUser = async () => {
  try {
    const {user} = await createUserWithEmailAndPassword(auth, form.email, form.password)
    if (user.email) {
      return user
    }
  } catch (e) {
    errors.value = e.message
  } finally {
    toggleLoader()
  }


}


</script>

<style scoped>

</style>
