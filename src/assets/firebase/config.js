// instalamos las dependencias
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// configuracion de firebase base de datos restaurant
const firebaseConfig = {
  apiKey: "AIzaSyAKZT6ZVoq8JSdC_86mrbnszKOH1pmRipU",
  authDomain: "restaurantapp-67389.firebaseapp.com",
  projectId: "restaurantapp-67389",
  storageBucket: "restaurantapp-67389.appspot.com",
  messagingSenderId: "694026062818",
  appId: "1:694026062818:web:19376a45ca1218f122c7bb"
};

console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);