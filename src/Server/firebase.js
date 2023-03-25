import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIREBASE_KEY,
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