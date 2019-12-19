import firebase from "firebase";
import firestore from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBVH-CtPVtfIqMPnT-iHF1qmE3MUMuj7og",
  authDomain: "udemy-ninja-smoothies-fasz.firebaseapp.com",
  databaseURL: "https://udemy-ninja-smoothies-fasz.firebaseio.com",
  projectId: "udemy-ninja-smoothies-fasz",
  storageBucket: "udemy-ninja-smoothies-fasz.appspot.com",
  messagingSenderId: "535829761682",
  appId: "1:535829761682:web:b07560751168d3824fe04b",
  measurementId: "G-6KJ9S5K7XP"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });
firebase.analytics();

export default firebaseApp.firestore();
