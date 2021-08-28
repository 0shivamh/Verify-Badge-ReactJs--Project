
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC9-dhyp_cH_CDLrmyylEGXRO1TzFBnOks",
  authDomain: "verify-badge-cwi.firebaseapp.com",
  projectId: "verify-badge-cwi",
  storageBucket: "verify-badge-cwi.appspot.com",
  messagingSenderId: "218337438048",
  appId: "1:218337438048:web:2fcb57053266f9d6dd9605",
  measurementId: "G-S525BJTW6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);