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

export const createUserProfileDocument = async (userAuth, otherData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const SnapShot = await userRef.get();

  if (!SnapShot.exists) {
    const { displayName, email } = userAuth;
    const EntryTime = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        EntryTime,
        ...otherData,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return userAuth;
};

firebase.initializeApp(App);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
