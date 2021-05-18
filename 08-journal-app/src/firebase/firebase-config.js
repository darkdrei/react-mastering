import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

export const firebaseConfig = {
    apiKey: "AIzaSyC2QHF6TP1vAXu_-fQnTlLlqt7WodexiU0",
    authDomain: "react-app-curso-5e04e.firebaseapp.com",
    projectId: "react-app-curso-5e04e",
    storageBucket: "react-app-curso-5e04e.appspot.com",
    messagingSenderId: "971377667591",
    appId: "1:971377667591:web:1ef117352a74831fb104a2"
  };
  // Initialize Firebase
  firebase.initializeApp( firebaseConfig );

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
    db,
    googleAuthProvider,
    firebase
  }