// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAarRKBoBvPsdHM9ay4gX-x4tV7rGNS0KQ",
  authDomain: "clone-d7d2b.firebaseapp.com",
  projectId: "clone-d7d2b",
  storageBucket: "clone-d7d2b.firebasestorage.app",
  messagingSenderId: "801872047737",
  appId: "1:801872047737:web:c7cdbc75ea53ce6f3feea8"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
// https://firebase.google.com/docs/web/setup#available-libraries
//some commands needed
// firebase login
// firebase init
// firebase deploy
