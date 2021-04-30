import firebase from "firebase/app";
import database from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyDVmP2DyMY0eXgK-JRZRH-iLZ5wjd29ll8",
  authDomain: "sheet-2-firebase-ef219.firebaseapp.com",
  databaseURL: "https://sheet-2-firebase-ef219-default-rtdb.firebaseio.com",
  projectId: "sheet-2-firebase-ef219",
  storageBucket: "sheet-2-firebase-ef219.appspot.com",
  messagingSenderId: "543724438312",
  appId: "1:543724438312:web:e76a7be4c737a2dca0461d",
  measurementId: "G-507EJSP371",
};

firebase.initializeApp(config);
export default firebase;
