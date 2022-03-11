import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUGmvCHSb3hV6JBIyIxewlLA5hkVfw068",
  authDomain: "starbucks-clone-ts.firebaseapp.com",
  projectId: "starbucks-clone-ts",
  storageBucket: "starbucks-clone-ts.appspot.com",
  messagingSenderId: "1049025098543",
  appId: "1:1049025098543:web:6d9289e267be52b9a9e7da"
};

// Initialize Firebase and with the result initialize Firebase Auth
const firebaseApp = firebase.initializeApp(firebaseConfig);
/* fijate que me apoyo en firebaseApp y no en firebase,lógicamente */
const firebaseAuth = firebaseApp.auth()

export { firebaseAuth }