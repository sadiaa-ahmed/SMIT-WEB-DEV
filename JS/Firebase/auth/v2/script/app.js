
import {auth, onAuthStateChanged} from "./firebase.js";

const userEmailDiv = document.querySelector("#user-email");

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      window.location = "./pages/dashboard.html";

    //   console.log("🚀 ~ dashboard ~ user:", user);
  
      userEmailDiv.innerText = user.email;
    } else {
        // user is logout
      window.location = "./pages/login.html";
      console.log("User is signed out");
    }
  });