import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { initializeApp } from "firebase/app";
import { Provider } from "react-redux";

const firebaseConfig = {
  apiKey: "AIzaSyBZTIAyZaFOSraO6jU-OfntMyfyPYNAjgs",
  authDomain: "react-movi.firebaseapp.com",
  databaseURL: "https://react-movi-default-rtdb.firebaseio.com",
  projectId: "react-movi",
  storageBucket: "react-movi.appspot.com",
  messagingSenderId: "378256560820",
  appId: "1:378256560820:web:1d801d0564e37c59ebbde1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
