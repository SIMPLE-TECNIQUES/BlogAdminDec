// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCROFk46AXZwy6eY0E-MMBwU8DnrKKtTJY",
  authDomain: "freelance-d35a6.firebaseapp.com",
  projectId: "freelance-d35a6",
  storageBucket: "freelance-d35a6.firebasestorage.app",
  messagingSenderId: "560071002308",
  appId: "1:560071002308:web:28d228134a4cf27289e191"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { db,storage, ref, uploadBytes, getDownloadURL,collection, addDoc };