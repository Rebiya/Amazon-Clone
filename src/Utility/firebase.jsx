// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import {getFirestore}  from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyB3fcDhsJs8smn8sSQyp81Iu_aBgN0vfAs",
    authDomain: "clone-9c5bb.firebaseapp.com",
    projectId: "clone-9c5bb",
    storageBucket: "clone-9c5bb.firebasestorage.app",
    messagingSenderId: "582311634121",
    appId: "1:582311634121:web:31de0abdce064399871918"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);