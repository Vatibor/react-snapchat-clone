import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBNGcvDsy5YTyVPRoHM_Q2jZY6uPmBozHU",
    authDomain: "react-snapchat-clone-4d977.firebaseapp.com",
    projectId: "react-snapchat-clone-4d977",
    storageBucket: "react-snapchat-clone-4d977.appspot.com",
    messagingSenderId: "258579842744",
    appId: "1:258579842744:web:1e7942c146b7249181d64d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };