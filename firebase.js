import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importeer de Firestore module

// Jouw Firebase-configuratie
const firebaseConfig = {
  apiKey: "AIzaSyBHcrNMZ9tH-ZEj_KpyRNxltCjWDEC4xu0",
  authDomain: "jenzvandevelde-mobile.firebaseapp.com",
  projectId: "jenzvandevelde-mobile",
  storageBucket: "jenzvandevelde-mobile.appspot.com",
  messagingSenderId: "143846513869",
  appId: "1:143846513869:web:e3108d856f7cc399f29d84",
  measurementId: "G-4MQ1ETWY32" // Optioneel
};

// Firebase initialiseren
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app); // Verkrijg een instantie van Firestore

export { app, firestore };
