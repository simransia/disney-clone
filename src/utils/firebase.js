import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDjTJIi5a16wVX3p_piUO006CK_hdj53IE",
  authDomain: "disney-plus-clone-b8ac4.firebaseapp.com",
  projectId: "disney-plus-clone-b8ac4",
  storageBucket: "disney-plus-clone-b8ac4.appspot.com",
  messagingSenderId: "559104332845",
  appId: "1:559104332845:web:3d2e7597d9ce8076c7d4a4",
  measurementId: "G-K2ENQPS66V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
