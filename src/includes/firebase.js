import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD0LUlB9icA44NwAsqhHgXVs_jfhbEJOqc",
  authDomain: "music-7d294.firebaseapp.com",
  projectId: "music-7d294",
  storageBucket: "music-7d294.appspot.com",
  appId: "1:884671287793:web:6672f715c2fb2a01eef450"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export {
  auth,
  db,
  usersCollection,
};
