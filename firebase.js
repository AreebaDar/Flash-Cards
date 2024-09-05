// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHw3Fasv33dH-dSgD02pYSTSE4oYfI_hI",
  authDomain: "flashcardsaas-7f489.firebaseapp.com",
  projectId: "flashcardsaas-7f489",
  storageBucket: "flashcardsaas-7f489.appspot.com",
  messagingSenderId: "687085795485",
  appId: "1:687085795485:web:51c0108a89b858311ebc74",
  measurementId: "G-55KSKGQ619"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore database instance
export const db = getFirestore(app);

let analytics;

if (typeof window !== "undefined") {
  // This check ensures that the code runs only in the client-side environment
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { analytics };