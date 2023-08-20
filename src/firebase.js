// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx__ulwRfR5f6HyoRvMKwmzz9ZOBrvBZs",
  authDomain: "netflix-react-app-4bb02.firebaseapp.com",
  projectId: "netflix-react-app-4bb02",
  storageBucket: "netflix-react-app-4bb02.appspot.com",
  messagingSenderId: "1089044645943",
  appId: "1:1089044645943:web:2c14d63aa04902e37b97b2",
  measurementId: "G-L4LV469NCH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)