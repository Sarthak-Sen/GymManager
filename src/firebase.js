import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,

  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,

  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,

  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,

  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,

  appId: process.env.REACT_APP_FIREBASE_APP_ID,



  // apiKey: "AIzaSyDwAc-nOP9G2bPs9_s4IWqhQuO2bND2bMA",

  // authDomain: "gym-test-557c1.firebaseapp.com",

  // databaseURL: "https://gym-test-557c1-default-rtdb.asia-southeast1.firebasedatabase.app",

  // projectId: "gym-test-557c1",

  // storageBucket: "gym-test-557c1.appspot.com",

  // messagingSenderId: "291493017889",

  // appId: "1:291493017889:web:06da89e7afe7127ea2a660",




});

export const auth = app.auth();
export const database = app.database();
export default app;
