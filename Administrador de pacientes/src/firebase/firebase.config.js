// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBDLWvQ2iV8mPBgSGbc0zTqCfDo66_iE3I",
    authDomain: "admin-pacientes-f05a9.firebaseapp.com",
    projectId: "admin-pacientes-f05a9",
    storageBucket: "admin-pacientes-f05a9.appspot.com",
    messagingSenderId: "885745164725",
    appId: "1:885745164725:web:3b350744197dc2badf79fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app

export const db = getFirestore(app);
export const auth = getAuth(app);
