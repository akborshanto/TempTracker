// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo_KY2kvFdKzFnTGIYxMg9j3XuzZpMfXQ",
  authDomain: "auth-m50.firebaseapp.com",
  projectId: "auth-m50",
  storageBucket: "auth-m50.appspot.com",
  messagingSenderId: "992123827946",
  appId: "1:992123827946:web:33282f24244c6443a3c993"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);