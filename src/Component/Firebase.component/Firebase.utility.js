import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const App = {
  apiKey: "AIzaSyBZTIAyZaFOSraO6jU-OfntMyfyPYNAjgs",
  authDomain: "react-movi.firebaseapp.com",
  databaseURL: "https://react-movi-default-rtdb.firebaseio.com",
  projectId: "react-movi",
  storageBucket: "react-movi.appspot.com",
  messagingSenderId: "378256560820",
  appId: "1:378256560820:web:1d801d0564e37c59ebbde1",
};

export const createUserProfleDocument = async (userAuth, extraData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const EnteryDate = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        ...extraData,
        EnteryDate,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return userRef;
};

firebase.initializeApp(App);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
