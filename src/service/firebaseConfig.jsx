// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirebase} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4Y0pS9YN7x44aAQskRtckAqqq_t0rOAM",
  authDomain: "exploreai-3a4a2.firebaseapp.com",
  projectId: "exploreai-3a4a2",
  storageBucket: "exploreai-3a4a2.firebasestorage.app",
  messagingSenderId: "931253407652",
  appId: "1:931253407652:web:bb44e390ce6911b04cbb31",
  measurementId: "G-45MCRB3DKZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);