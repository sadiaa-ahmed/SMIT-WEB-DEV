
import {signOut , onAuthStateChanged} from "./firebase.js";

const userEmailDiv = document.querySelector("#user-email");

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      console.log("🚀 ~ dashboard ~ user:", user);
  
      userEmailDiv.innerText = user.email;
    } else {
      window.location = "./login.html";
      console.log("User is signed out");
    }
  });
// const myTestFunc = async() => {
//     await onAuthStateChanged();
// };
// myTestFunc();

const btn = document.querySelector("#logout-button");

btn.addEventListener("click", async() => {
    try{
        await signOut(auth);
    console.log("Sign-out Successfully");

    }catch(error){

        console.log("error" , error);
    }
})
