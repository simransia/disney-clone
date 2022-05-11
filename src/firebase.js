import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAVSuVvppjIFeRCZnMWjmr5CBDGp3Rbi14",
    authDomain: "disney-plus-clone-97386.firebaseapp.com",
    projectId: "disney-plus-clone-97386",
    storageBucket: "disney-plus-clone-97386.appspot.com",
    messagingSenderId: "753085384569",
    appId: "1:753085384569:web:01bc7300cc7f46557111a8"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage()
 
  export {auth, provider, storage};
  export default db;