import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBIGwc2t7_9-6OkqYSgcOMwLpIaosWDiJ8",
    authDomain: "fir-crud-d8947.firebaseapp.com",
    projectId: "fir-crud-d8947",
    storageBucket: "fir-crud-d8947.appspot.com",
    messagingSenderId: "1085179345010",
    appId: "1:1085179345010:web:fd9e3e912a6961551f2aeb",
    measurementId: "G-TB3B2QNC2S"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);