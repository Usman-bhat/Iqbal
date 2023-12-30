// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6SER4a72t0_08sP56zyEpxFNPxWXxY0E",
  authDomain: "alama-iqbal.firebaseapp.com",
  projectId: "alama-iqbal",
  storageBucket: "alama-iqbal.appspot.com",
  messagingSenderId: "176147305800",
  appId: "1:176147305800:web:3833c37eea8e195b3b0f7d",
  measurementId: "G-9JVX4GL6M4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
export {db}
