
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
 authDomain: "interviewagent-d543a.firebaseapp.com",
  projectId: "interviewagent-d543a",
  storageBucket: "interviewagent-d543a.firebasestorage.app",
  messagingSenderId: "421453352313",
  appId: "1:421453352313:web:b2bfcaad16b14d923ff3a8"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}