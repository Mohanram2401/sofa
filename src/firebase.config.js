
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBg9hHoYWNz__WGeIb8yQk64n5j8fx9r8",
  authDomain: "comfy-kec.firebaseapp.com",
  projectId: "comfy-kec",
  storageBucket: "comfy-kec.appspot.com",
  messagingSenderId: "488307527111",
  appId: "1:488307527111:web:f55c7c8cb4b88fc05a1de2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
 
export default app;
