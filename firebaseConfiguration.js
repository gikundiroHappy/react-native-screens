// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7svtysoHvgN6bLVbeBY-851FK32RPYBk",
  authDomain: "learnauth-8ce75.firebaseapp.com",
  projectId: "learnauth-8ce75",
  storageBucket: "learnauth-8ce75.appspot.com",
  messagingSenderId: "424273480627",
  appId: "1:424273480627:web:10971e4208c93ab9b0d9c6"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
