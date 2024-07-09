import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgeC7koXSnrSHHNtHQXDMU5Il2WE0RCvE",
  authDomain: "react-firebase-1c1b4.firebaseapp.com",
  projectId: "react-firebase-1c1b4",
  storageBucket: "react-firebase-1c1b4.appspot.com",
  messagingSenderId: "71583903883",
  appId: "1:71583903883:web:f768bd07fd2f90f60da48e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };