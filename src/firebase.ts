import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxb2vzrnxEwNHZKrQ-21lqKBuO7pHwb-E",
  authDomain: "hackaton-393fe.firebaseapp.com",
  projectId: "hackaton-393fe",
  storageBucket: "hackaton-393fe.appspot.com",
  messagingSenderId: "235551940296",
  appId: "1:235551940296:web:49cf067e0ada753390cffd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
