<template>
  <v-card class="p-5">

    <v-card-tit class="d-flex justify-space-between p-5">
      <h2>Students & Exams</h2>
      <v-btn @click="dialogue= true">Add </v-btn>
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
                Age
              </th>
              <th class="text-left">
                Class
              </th>
              <th>
                Exam
              </th>
            </tr>
            </thead>
            <tbody>
            <tr
              v-for="item in students"
              :key="item.name"
            >
              <td>{{ item.name }}</td>
              <td>{{ item.age }}</td>
              <td>{{ item.class }}</td>
              <td>
                <ul v-for="exam in item.exams">
                  <li>{{exam.name}} - {{exam.date}}</li>
                </ul>

              </td>
            </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
  <add-new-student-dialogue v-model="dialogue"></add-new-student-dialogue>
</template>

<script setup>
import {ref} from "vue";

const dialogue = ref(false)
import AddNewStudentDialogue from "@/components/AddNewStudentDialogue.vue";
import {useFirestore, useCollection} from 'vuefire'
import {collection} from 'firebase/firestore'
const db = useFirestore()
const students = useCollection(collection(db, 'students'))



</script>

<style scoped>

</style>
