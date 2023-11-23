// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAZQDUQqbUJHI13zHxC3ravqAIBxg3VdC0",
  authDomain: "territorio-toledo.firebaseapp.com",
  projectId: "territorio-toledo",
  storageBucket: "territorio-toledo.appspot.com",
  messagingSenderId: "11861056565",
  appId: "1:11861056565:web:617f57a38a335ceca2a57c"
};

// const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp =firebase.firestore.FieldValue.serverTimestamp;

export{timestamp}
export default firebaseApp.firestore();