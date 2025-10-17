// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";        
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_k0V7Y5oZq5Yow8PNAadKhshrvSob-aI",
  authDomain: "myproject2-c9a37.firebaseapp.com",
  projectId: "myproject2-c9a37",
  storageBucket: "myproject2-c9a37.firebasestorage.app",
  messagingSenderId: "645402503797",
  appId: "1:645402503797:web:37a5d803bff8722807a63c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
