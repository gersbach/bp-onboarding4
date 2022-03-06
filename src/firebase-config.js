// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD5g2FL_nftdcQPwgX93LSHuECTjdO8jRw",
    authDomain: "fir-tutorial-eecd8.firebaseapp.com",
    projectId: "fir-tutorial-eecd8",
    storageBucket: "fir-tutorial-eecd8.appspot.com",
    messagingSenderId: "380995740505",
    appId: "1:380995740505:web:f1d6d794d8af528c4ea248",
    measurementId: "G-K6RVPPYXNX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);