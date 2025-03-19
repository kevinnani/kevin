// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDoc, setDoc } from "firebase/firestore";
// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyAL_GadUkaKiu8-kfK2fvTRBEbAON3BrlY",
  authDomain: "mypage-c6f87.firebaseapp.com",
  projectId: "mypage-c6f87",
  storageBucket: "mypage-c6f87.firebasestorage.app",
  messagingSenderId: "685071000032",
  appId: "1:685071000032:web:912355d23841dd50a74b85"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Initialize Firebase  for normal
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, doc, getDoc, setDoc };