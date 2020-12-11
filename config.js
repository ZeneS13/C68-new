import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAtKFkaDSszxKmT5Ge0QNB2z7uo-vQ7lzw",
    authDomain: "willy-app-b5e56.firebaseapp.com",
    projectId: "willy-app-b5e56",
    storageBucket: "willy-app-b5e56.appspot.com",
    messagingSenderId: "1002473353221",
    appId: "1:1002473353221:web:377382e31fa435f1596c6c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  export default db;
