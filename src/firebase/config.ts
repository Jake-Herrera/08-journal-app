// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe89pM6AB0NLcTGOSWR5z_9nw0WTMwij4",
  authDomain: "react-cursos-be1de.firebaseapp.com",
  projectId: "react-cursos-be1de",
  storageBucket: "react-cursos-be1de.appspot.com",
  messagingSenderId: "413146282779",
  appId: "1:413146282779:web:9a255db4f73ecc8ff571be"
};

// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);

export const FireBaseAuth = getAuth(FireBaseApp);

export const FireBaseDB = getFirestore(FireBaseApp);