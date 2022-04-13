// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW9Z9LhZ9-OBLqSv8UmDVkXd_K0DEsqw4",
  authDomain: "simple-ema-john-5f08c.firebaseapp.com",
  projectId: "simple-ema-john-5f08c",
  storageBucket: "simple-ema-john-5f08c.appspot.com",
  messagingSenderId: "406908784055",
  appId: "1:406908784055:web:dd2ac3e0159bf82e3eec32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;