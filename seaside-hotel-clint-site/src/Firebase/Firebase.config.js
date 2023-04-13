// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQxLd4AFNMHZPv4bgXCJkPZ53xWQIFAUA",
  authDomain: "seaside-hotel.firebaseapp.com",
  projectId: "seaside-hotel",
  storageBucket: "seaside-hotel.appspot.com",
  messagingSenderId: "321195361155",
  appId: "1:321195361155:web:f1eb9d15ee88344c1cecb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;