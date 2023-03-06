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
          </v-container>
        </v-card-text>
        <v-card-actions>
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
import {defineProps, defineEmits, ref} from "vue";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '@/plugins/firebase'

import {studentsRef} from '@/plugins/firebase'
import {doc, setDoc, updateDoc} from "firebase/firestore";


const props = defineProps(['modelValue', 'form'])

const emit = defineEmits(['update:modelValue'])
const loader = ref(false)
const toggleLoader = () => {
  loader.value = !loader.value
}
// Add a new document in collection "students"
const save = async () => {
  toggleLoader()
  const docRef = doc(studentsRef, 'students');
  await updateDoc(docRef, props.form);
  toggleLoader()
  emit('update:modelValue', false)
}


</script>

<style scoped>

</style>
