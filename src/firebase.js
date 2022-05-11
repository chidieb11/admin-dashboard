import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXC0SfpakDCBsIyIg6b4lprWaQdmUoWpo",
  authDomain: "admin-dashboard-98c1b.firebaseapp.com",
  projectId: "admin-dashboard-98c1b",
  storageBucket: "admin-dashboard-98c1b.appspot.com",
  messagingSenderId: "1091571013133",
  appId: "1:1091571013133:web:58df3f6aed598ff6696744",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
