// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC-ttNCXsc5PsLx8CEIqADs-tcUbyESk0",
  authDomain: "gym-website-app.firebaseapp.com",
  projectId: "gym-website-app",
  storageBucket: "gym-website-app.appspot.com",
  messagingSenderId: "1022700343897",
  appId: "1:1022700343897:web:cb0f604173c8088cfd9748"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app , auth };