// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXx2_05Xo2S4vyFTnqueVKAlkpCtxzAGY",
  authDomain: "turbo-sporty-toy.firebaseapp.com",
  projectId: "turbo-sporty-toy",
  storageBucket: "turbo-sporty-toy.appspot.com",
  messagingSenderId: "37471781984",
  appId: "1:37471781984:web:2ff99df6f38362f1486f05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;