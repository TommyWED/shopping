// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcOXBreMYlU0tG2cwPcQsfOyAPtQGxgFQ",
  authDomain: "proven-country-380107.firebaseapp.com",
  projectId: "proven-country-380107",
  storageBucket: "proven-country-380107.appspot.com",
  messagingSenderId: "634117444222",
  appId: "1:634117444222:web:9e33d0135a3af3600c3e2f",
  measurementId: "G-185L6QMDZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);