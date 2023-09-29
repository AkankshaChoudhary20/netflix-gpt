//Info in this file will help to access firebase fom our app

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZSK9-pucI1UQ1I_7B9OFall2Bj88Nv5I",
  authDomain: "netflix-gpt-59be0.firebaseapp.com",
  projectId: "netflix-gpt-59be0",
  storageBucket: "netflix-gpt-59be0.appspot.com",
  messagingSenderId: "1072036023736",
  appId: "1:1072036023736:web:9db0d63705db49e406534d",
  measurementId: "G-PZBHSZB304",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
