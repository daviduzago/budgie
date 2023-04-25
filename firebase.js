// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDp6uYZcP156xVW5mpjvbgFLTSINw8k6T8",
    authDomain: "budgie-112358.firebaseapp.com",
    projectId: "budgie-112358",
    storageBucket: "budgie-112358.appspot.com",
    messagingSenderId: "151158718339",
    appId: "1:151158718339:web:2ecc61e060cb21aa76c0b6"
};

// Initialize Firebase
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
} else {
    const app = firebase.app();
}

const auth = firebase.auth();

export {auth};