// firebase ka sara kam idher hoga

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

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

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(app);

// Create a storage reference from our storage service

export { storage, ref, uploadBytes, getDownloadURL };