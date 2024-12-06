// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnuGlGYcqceAiX_6Sgi6dfFpisAQKcW5k",
  authDomain: "clone-ba66c.firebaseapp.com",
  projectId: "clone-ba66c",
  storageBucket: "clone-ba66c.firebasestorage.app",
  messagingSenderId: "768497099668",
  appId: "1:768497099668:web:d772def30f0c3d7871a581"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// https://firebase.google.com/docs/web/setup#available-libraries
//some commands needed
// firebase login
// firebase init
// firebase deploy
