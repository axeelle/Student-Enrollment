import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUedK4fFzjGlthcddE3ZhoxcfqoZLT_Bw",
  authDomain: "studentenrollment-d8bda.firebaseapp.com",
  projectId: "studentenrollment-d8bda",
  storageBucket: "studentenrollment-d8bda.firebasestorage.app",
  messagingSenderId: "867616517112",
  appId: "1:867616517112:web:67e22c152094638500840d",
  measurementId: "G-NMVRFY9MLZ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);