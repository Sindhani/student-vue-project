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
            <v-btn @click="addRow">+</v-btn>

            <v-row v-for="(row,index) in form.exams">
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  label="Class"
                  v-model="form.exams[index].name"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  label="Class"
                  v-model="form.exams[index].date"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
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
import {defineProps, defineEmits, reactive} from "vue";
import {studentsRef } from '@/plugins/firebase'
import { doc, setDoc } from "firebase/firestore";
const form = reactive({
  name: null,
  age: null,
  class: null,
  exams: [{
    name: null,
    date: null
  }]
})
const addRow = () => {
  form.exams.push({name: null, date: null})
}
defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

// Add a new document in collection "cities"
const save = async () =>{
  await setDoc(doc(studentsRef, "students"), {
    name: form.name,
    age: form.age,
    class: form.class,
    exams: form.exams
  });
  emit('update:modelValue', false)
}


</script>

<style scoped>

</style>
