// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp72WLTBHrac0vqKiBFcDxF_FNJP8PcOY",
  authDomain: "smit-web-dev.firebaseapp.com",
  projectId: "smit-web-dev",
  storageBucket: "smit-web-dev.appspot.com",
  messagingSenderId: "423692471251",
  appId: "1:423692471251:web:f1db0ae0dc8b3bcc3d3d26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export{auth , createUserWithEmailAndPassword, signInWithEmailAndPassword};
