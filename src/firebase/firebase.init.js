// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc3eBHqk7YAV6xhZ2Enq74r_EEzigWHfg",
  authDomain: "super-suggesto.firebaseapp.com",
  projectId: "super-suggesto",
  storageBucket: "super-suggesto.firebasestorage.app",
  messagingSenderId: "704513483582",
  appId: "1:704513483582:web:82d623270c740b10dc026f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);