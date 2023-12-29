// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBscEMao8yDLJxs71Zk0Jo1pbRLg7ieWeg",
  authDomain: "fiewin-c293f.firebaseapp.com",
  projectId: "fiewin-c293f",
  storageBucket: "fiewin-c293f.appspot.com",
  messagingSenderId: "217691482138",
  appId: "1:217691482138:web:3e116d72cde854275349a3",
  measurementId: "G-VBTC5J7GM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export default app