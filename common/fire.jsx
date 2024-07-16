import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4glYX-Ze2X_ms-4ma2GLUe1byNuJdnv8",
  authDomain: "payment-platform-a263a.firebaseapp.com",
  projectId: "payment-platform-a263a",
  storageBucket: "payment-platform-a263a.appspot.com",
  messagingSenderId: "955837910858",
  appId: "1:955837910858:web:35e3bde97df2ebb1713bb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () =>{
     
    let user = null;

    await signInWithPopup(auth, provider)
    .then((result)=>{
        user = result.user
    })
    .catch((err)=>{
        console.log(err)
    })
    return user;
}