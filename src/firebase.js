import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCi1i-UsTG1k_646YoTSdzv5_DEPriZDyk",
  authDomain: "facebook-clone-3db2b.firebaseapp.com",
  databaseURL: "https://facebook-clone-3db2b.firebaseio.com",
  projectId: "facebook-clone-3db2b",
  storageBucket: "facebook-clone-3db2b.appspot.com",
  messagingSenderId: "112566187272",
  appId: "1:112566187272:web:7ebba88cab3ffdf93ba8bd",
  measurementId: "G-R1V7Z695RZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
