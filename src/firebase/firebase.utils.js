import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDPImv_Ti7w-c8Ae5CvpGLrIQ90XjAh4q4",
    authDomain: "crwn-db-1111.firebaseapp.com",
    projectId: "crwn-db-1111",
    storageBucket: "crwn-db-1111.appspot.com",
    messagingSenderId: "825058936878",
    appId: "1:825058936878:web:2164f3b1aa2c15e490f7bf"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;