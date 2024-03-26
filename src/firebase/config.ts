import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcg8qQmzKx7179x7REKCWI6uNpzNTDok0",
  authDomain: "fir-project-ed198.firebaseapp.com",
  projectId: "fir-project-ed198",
  storageBucket: "fir-project-ed198.appspot.com",
  messagingSenderId: "417251584884",
  appId: "1:417251584884:web:671585d5593ed9da7fda21",
};
const app = initializeApp(firebaseConfig);

const appAuth = getAuth(app);
const db = getFirestore(app);

export { appAuth, db };
