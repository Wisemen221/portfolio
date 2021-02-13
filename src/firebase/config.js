import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCXrhytIhuhpIjGmWNZ2P6ablhEh8a1Skk",
  authDomain: "portfolio-2355c.firebaseapp.com",
  projectId: "portfolio-2355c",
  storageBucket: "portfolio-2355c.appspot.com",
  messagingSenderId: "686324150549",
  appId: "1:686324150549:web:21c9347d9bbcab58d8f91c"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }