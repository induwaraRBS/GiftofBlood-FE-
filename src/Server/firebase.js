// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0bl4ZB518UHpDZgb7VhB_iIu3R9RRO1I",
  authDomain: "gift-of-blood.firebaseapp.com",
  projectId: "gift-of-blood",
  storageBucket: "gift-of-blood.appspot.com",
  messagingSenderId: "956027932788",
  appId: "1:956027932788:web:f9ef95630e8a87681a4121",
  measurementId: "G-RNNXS0WQJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);

export default app 