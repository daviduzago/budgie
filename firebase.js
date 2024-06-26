import {initializeApp} from 'firebase/app';
import {initializeAuth, reactNativeLocalPersistence, getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDp6uYZcP156xVW5mpjvbgFLTSINw8k6T8",
    authDomain: "budgie-112358.firebaseapp.com",
    projectId: "budgie-112358",
    storageBucket: "budgie-112358.appspot.com",
    messagingSenderId: "151158718339",
    appId: "1:151158718339:web:2ecc61e060cb21aa76c0b6",
};

export const app = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = getAuth(app);

initializeAuth(app,
    {
        persistence: reactNativeLocalPersistence
    }
)

