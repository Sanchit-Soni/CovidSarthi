import firebase from "firebase/app";
import database from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyDgb-Vquxg3EMrlfRCAZ2_sb3P5Y1lhI3E",
  authDomain: "covidsarthi.firebaseapp.com",
  databaseURL: "https://covidsarthi-default-rtdb.firebaseio.com",
  projectId: "covidsarthi",
  storageBucket: "covidsarthi.appspot.com",
  messagingSenderId: "819530536777",
  appId: "1:819530536777:web:9d698c162b24a2e260ec98",
  measurementId: "G-VWG8XKN0FV"
};

firebase.initializeApp(config);
export default firebase;
