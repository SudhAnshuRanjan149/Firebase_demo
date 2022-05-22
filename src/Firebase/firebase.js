// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import firebase from 'firebase/compat/app';
// import "firebase/compat/auth";
// import "firebase/compat/storage";
// import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLZ5hmlB6g6s-4qCQPgR4xhW0zVbY-C3A",
  authDomain: "instagram-clone-cecbe.firebaseapp.com",
  projectId: "instagram-clone-cecbe",
  storageBucket: "instagram-clone-cecbe.appspot.com",
  messagingSenderId: "548493695231",
  appId: "1:548493695231:web:cab0bb79375ecc6b6cd4ca",
  measurementId: "G-44E6Y969SN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();

// export const auth = firebase.auth();
