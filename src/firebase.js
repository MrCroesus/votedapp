import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTtmDb2OlMbvWuZ7y5FGEvd4a_0Bo2UDg",
  authDomain: "rnvotedapp.firebaseapp.com",
  projectId: "rnvotedapp",
  storageBucket: "rnvotedapp.appspot.com",
  messagingSenderId: "1029809517766",
  appId: "1:1029809517766:web:95f3f687d1c373d7d813c7",
  measurementId: "G-5SXYXTP2SH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

