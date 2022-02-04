import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCQ-3opnhyA3zf6VwT8kvj0XJoBQIaDX1Q",
  authDomain: "challenge-34a03.firebaseapp.com",
  projectId: "challenge-34a03",
  storageBucket: "challenge-34a03.appspot.com",
  messagingSenderId: "848021410854",
  appId: "1:848021410854:web:9df3c7828416a4861782e7",
});

const auth = getAuth(firebaseApp);
export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
};
export default firebaseApp;
