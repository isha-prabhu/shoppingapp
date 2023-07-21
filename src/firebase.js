import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXERtd82yGKoY4I6UtbGsOaPVbDYlezh0",
  authDomain: "shopping-app-9a54b.firebaseapp.com",
  projectId: "shopping-app-9a54b",
  storageBucket: "shopping-app-9a54b.appspot.com",
  messagingSenderId: "407501492915",
  appId: "1:407501492915:web:1bfaebb67e3b7200ebd6c6",
  measurementId: "G-7VQRGT1GX8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
