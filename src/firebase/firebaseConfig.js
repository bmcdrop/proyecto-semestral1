// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdZco5_qJU_IR0LbMZZ8uc6BX_nrZR984",
  authDomain: "tellevoapp3.firebaseapp.com",
  projectId: "tellevoapp3",
  storageBucket: "tellevoapp3.appspot.com",
  messagingSenderId: "429156961177",
  appId: "1:429156961177:web:ed26dfed7aff323e63e108",
  measurementId: "G-FTRK86SLPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);