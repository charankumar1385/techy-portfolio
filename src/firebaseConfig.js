// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFcJlkmEynLPCfnv5YBV9Av1OGzFyHIAk",
  authDomain: "techy-portfolio-cd3b8.firebaseapp.com",
  projectId: "techy-portfolio-cd3b8",
  storageBucket: "techy-portfolio-cd3b8.appspot.com",
  messagingSenderId: "868875917129",
  appId: "1:868875917129:web:97358f813281a965e72c98",
  measurementId: "G-CVJM02NNQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const analytics = getAnalytics(app);
