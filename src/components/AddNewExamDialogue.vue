<template>
  <v-row justify="center">
    <v-dialog
      :model-value="modelValue"
      width="1024"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Exam</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  type="text"
                  label="Exam"
                  v-model="form.exam_name"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  type="date"
                  label="Schedule On"
                  v-model="form.schedule_on"
                  required
                ></v-text-field>
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
import {defineProps, defineEmits, reactive} from "vue";
import {examsRef} from '@/plugins/firebase'
import {collection, doc, setDoc, addDoc} from "firebase/firestore";
import {useFirestore} from "vuefire";


const form = reactive({
  exam_name: null,
  user_id: null,
  schedule_on: null,
})

defineProps(['modelValue'])

const emit = defineEmits(['update:modelValue'])
const db = useFirestore()

// Add a new document in collection "cities"
const save = async () => {
  const examsRefs = collection(db, 'exams');
  await addDoc(examsRefs, {
    exam_name: form.exam_name,
    user_id: form.user_id,
    schedule_on: form.schedule_on,
  });
  emit('update:modelValue', false)
}


</script>

<style scoped>

</style>
