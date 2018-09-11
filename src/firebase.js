import firebase from 'firebase'
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDl4lTgidAa7wgFDu3T1is2-Bzne92QThM",
    authDomain: "evernote-3a9c9.firebaseapp.com",
    databaseURL: "https://evernote-3a9c9.firebaseio.com",
    projectId: "evernote-3a9c9",
    storageBucket: "evernote-3a9c9.appspot.com",
    messagingSenderId: "896648304198"
  };

//   firebase.initializeApp(firebaseConfig);
// firebase.firestore();

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true }
firestore.settings(settings)


export default firebase;