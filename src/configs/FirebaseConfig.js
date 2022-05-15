// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsFTmPjkPSUqMvzmC3b_YVvXjhcmDbL3U",
    authDomain: "netflix-clone-faee7.firebaseapp.com",
    projectId: "netflix-clone-faee7",
    storageBucket: "netflix-clone-faee7.appspot.com",
    messagingSenderId: "291533837148",
    appId: "1:291533837148:web:cdacfa36bf35bf8c642799",
    measurementId: "G-S43C7DQRXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);