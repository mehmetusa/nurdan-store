import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyA68GjPjTNcqHEWyDbrMAlpPG8rtyYoDyo",
  authDomain: "nurdan-e5ac3.firebaseapp.com",
  databaseURL: "https://nurdan-e5ac3.firebaseio.com",
  projectId: "nurdan-e5ac3",
  storageBucket: "nurdan-e5ac3.appspot.com",
  messagingSenderId: "675619600925",
  appId: "1:675619600925:web:2a5f8db6af8796fa02a4f4",
  measurementId: "G-KBDPZD3GDM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };