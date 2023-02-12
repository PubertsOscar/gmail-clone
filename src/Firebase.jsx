// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCIkjfYFcGrTky7y-FY0khEj2AQxQeYK8k",
  authDomain: "clone-53f38.firebaseapp.com",
  projectId: "clone-53f38",
  storageBucket: "clone-53f38.appspot.com",
  messagingSenderId: "411931244678",
  appId: "1:411931244678:web:685367bd88bb0acb55f907"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const provider = new GoogleAuthProvider();