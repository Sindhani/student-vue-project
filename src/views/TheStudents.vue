<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <v-card variant="outlined"
                class="p-5 m-5">
          <v-card-actions class="d-flex justify-end">
            <v-btn @click="dialogue= true" variant="outlined"><v-icon icon="mdi-plus-circle"/> Add New</v-btn>
          </v-card-actions>
          <v-card-title class="d-flex justify-space-between p-5">
            <h2>Students & Exams</h2>
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
                      Age
                    </th>
                    <th class="text-left">
                      Class
                    </th>
                    <th>
                      Actions
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-if="!students.length">
                    <td colspan="4" class="text-center">No data found</td>
                  </tr>
                  <tr
                    v-for="item in students"
                    :key="item.name"
                  >


                    <td>{{ item.name }}</td>
                    <td>{{ item.age }}</td>
                    <td>{{ item.class }}</td>
                    <td>
                      <div class="d-flex justify-start">
                        <v-icon size="large" icon="mdi-eye" @click="update(item)"></v-icon>
                        <v-icon size="large" icon="mdi-delete-circle" @click="deleteRow(item.id)"></v-icon>
                      </div>

                    </td>
                  </tr>
                  </tbody>
                </v-table>
              </v-card-text>
            </v-main>
          </v-layout>
        </v-card>
        <add-new-student-dialogue v-model="dialogue"></add-new-student-dialogue>
        <edit-student-dialogue v-model="editDialogue" :form="form" @update-row="onUpdate"></edit-student-dialogue>

      </v-col>
    </v-row>
  </v-container>


</template>

<script setup>
import {ref} from "vue";

const dialogue = ref(false)
const editDialogue = ref(false)
import {doc, deleteDoc, updateDoc, query, where} from "firebase/firestore";

const form = ref({
    name: null,
    class: null,
    age: null,
    email: null,
    password: null
  }
)


import AddNewStudentDialogue from "@/components/AddNewStudentDialogue.vue";
import EditStudentDialogue from "@/components/EditStudentDialogue.vue";
import {useFirestore, useCollection} from 'vuefire'
import {collection} from 'firebase/firestore'

const db = useFirestore()
const students = useCollection(collection(db, 'students'))

function update(item) {
  form.value = item
  editDialogue.value = true
}

const deleteRow = async (id) => {
  await deleteDoc(doc(db, "students", id));
}


</script>

<style scoped>

</style>
