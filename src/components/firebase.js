// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9kndJluTVfd62udeEleeh7sl2E6TIkcw",
  authDomain: "login-auth-dcc05.firebaseapp.com",
  projectId: "login-auth-dcc05",
  storageBucket: "login-auth-dcc05.firebasestorage.app",
  messagingSenderId: "367966793795",
  appId: "1:367966793795:web:6dd13dee5938618a82a4f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app); // If you are using Firestore, import and initialize it as well
export default app;
