<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <v-card variant="outlined"
                class="p-5 m-5">
          <v-card-actions class="d-flex justify-end">
            <v-btn @click="dialogue= true" variant="outlined">
              <v-icon icon="mdi-plus-circle"/>
              Add New
            </v-btn>
          </v-card-actions>
          <v-card-title class="d-flex justify-space-between p-5">
                Students' Exams
          </v-card-title>
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
                    <th class="text-left">
                      Actions
                    </th>

                  </tr>
                  </thead>
                  <tbody>
                  <tr
                    v-for="exam in exams"
                    :key="exam.name"
                  >
                    <td>{{ exam.exam_name }}</td>
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import {inject, ref} from "vue";
import AddNewExamDialogue from "@/components/AddNewExamDialogue.vue";
import {useFirestore, useCollection} from 'vuefire'

import {collection} from 'firebase/firestore'
import {doc, deleteDoc} from "firebase/firestore";

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
