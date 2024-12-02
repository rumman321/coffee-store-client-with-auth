// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgqzt6y-SaHCAah_NGl_Wbra5Ms12TKNo",
  authDomain: "coffee-store-aa966.firebaseapp.com",
  projectId: "coffee-store-aa966",
  storageBucket: "coffee-store-aa966.firebasestorage.app",
  messagingSenderId: "364157119238",
  appId: "1:364157119238:web:b9d5d076203529f4aa4c87",
  measurementId: "G-NE5ETQX6DD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);