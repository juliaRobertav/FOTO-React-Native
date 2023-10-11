import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCjWj1B4P9Tg8Utqk2bnCBZtrWBRB0JaHk",
  authDomain: "julia-ba28c.firebaseapp.com",
  projectId: "julia-ba28c",
  storageBucket: "julia-ba28c.appspot.com",
  messagingSenderId: "222298200023",
  appId: "1:222298200023:web:5c0c6ec9f5391c9c58dd92"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export {app, auth, storage, db}