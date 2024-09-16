// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

import {
  getFirestore,
  collection, 
  addDoc,
  serverTimestamp,
  getDocs,
  doc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArt5K-sQXGUKKAyFGrA5JzKK1pS6kquwg",
    authDomain: "smit-firebase-1c981.firebaseapp.com",
    projectId: "smit-firebase-1c981",
    storageBucket: "smit-firebase-1c981.appspot.com",
    messagingSenderId: "950804277634",
    appId: "1:950804277634:web:8af385fc2bda887d2ac79b"
};

const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export{
    db,
    collection, 
    addDoc,
    serverTimestamp,
    getDocs,
    doc,
    onSnapshot,
};