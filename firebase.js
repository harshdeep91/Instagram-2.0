// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFbvZOsJa44Y-uSf35N9IjIt9IFw2oyas",
  authDomain: "instagram2-76e38.firebaseapp.com",
  projectId: "instagram2-76e38",
  storageBucket: "instagram2-76e38.appspot.com",
  messagingSenderId: "345829725744",
  appId: "1:345829725744:web:fed05b42cf72dbd02d3ff5"
};

// Initialize Firebase
const app = getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { db, storage, app };