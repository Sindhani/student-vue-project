<template>
  <v-card class="p-5">

    <v-card-tit class="d-flex justify-space-between p-5">
      <h2>Students' Exams</h2>
      <v-btn @click="dialogue= true">Add</v-btn>
    </v-card-tit>
    <v-layout>
      <v-main style="height: 100%;">
        <v-card-text>
          <v-table>
            <thead>
            <tr>
              <th class="text-left">
                Name
              </th>
              <th class="text-left">
                Schedule On
              </th>
            </tr>
            </thead>
            <tbody>
            <tr
              v-for="exam in exams"
              :key="exam.name"
            >
              <td>{{ exam }}</td>
              <td>{{ dayJs(exam.schedule_on.seconds).format('DD-MM-YYYY') }}</td>
              <td>
                <v-icon size="large" icon="mdi-eye"></v-icon>
                <v-icon size="large" icon="mdi-delete-circle" @click="deleteRow(item)"></v-icon>

              </td>
            </tr>

            </tbody>
          </v-table>
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
  <add-new-exam-dialogue v-model="dialogue"></add-new-exam-dialogue>

</template>

<script setup>
import {inject, ref} from "vue";
import AddNewExamDialogue from "@/components/AddNewExamDialogue.vue";
import {useFirestore, useCollection} from 'vuefire'

import {collection} from 'firebase/firestore'
import { doc, deleteDoc } from "firebase/firestore";
const db = useFirestore()
const exams = useCollection(collection(db, 'exams'))
const dialogue = ref(false)
const dayJs = inject('dayJs')
const deleteRow = async (item) => {
  await deleteDoc(doc(db, "exams", item));
}

</script>

<style scoped>

</style>
