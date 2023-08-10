// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdZJ596ckEfnySEr5MUt77NmBipduzB9I",
  authDomain: "hackathon-3-2.firebaseapp.com",
  projectId: "hackathon-3-2",
  storageBucket: "hackathon-3-2.appspot.com",
  messagingSenderId: "866909599622",
  appId: "1:866909599622:web:d9928b09a2ba4e4ca91e07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
