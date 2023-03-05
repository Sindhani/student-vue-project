import {initializeApp} from 'firebase/app'
import {getFirestore, collection} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

export const firebaseApp = initializeApp({
  databaseURL: 'https://student-b5ca1-default-rtdb.firebaseio.com/',
  apiKey: "AIzaSyAro0_vXgi2u4gG9s4dem6_hO4wgXxywDY",
  authDomain: "student-b5ca1.firebaseapp.com",
  projectId: "student-b5ca1",
  storageBucket: "student-b5ca1.appspot.com",
  messagingSenderId: "22323577205",
  appId: "1:22323577205:web:6fdbd0c71ce5ac7249133c",
  measurementId: "G-3G5EV1EY9B"
})

// used for the databas refs
export const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const studentsRef = collection(db, 'students')
export const auth = getAuth(firebaseApp)
