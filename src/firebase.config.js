import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyD73NS05HdxHldW7pLAhZ9pcGF09vrmVcI",
  authDomain: "fir-two-e9ce5.firebaseapp.com",
  projectId: "fir-two-e9ce5",
  storageBucket: "fir-two-e9ce5.firebasestorage.app",
  messagingSenderId: "83658636312",
  appId: "1:83658636312:web:a1eb839697c43e772f176d"
};

const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth