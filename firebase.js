import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI5fNf3lK7bmhYdWbkOuiJf_x7-UFJ6nk",
  authDomain: "homeeffect-bf629.firebaseapp.com",
  projectId: "homeeffect-bf629",
  storageBucket: "homeeffect-bf629.appspot.com",
  messagingSenderId: "90248153553",
  appId: "1:90248153553:web:ca700aeec8b0d38f4c38f0",
  measurementId: "G-E5QBZBN912",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
