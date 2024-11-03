import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyB0BLigoL_Y22qEbqZTEV91ZyyNWrM7qcQ",
  authDomain: "resturantapp-712c6.firebaseapp.com",
  databaseURL: "https://resturantapp-712c6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "resturantapp-712c6",
  storageBucket: "resturantapp-712c6.appspot.com",
  messagingSenderId: "755265535963",
  appId: "1:755265535963:web:241cb1cd56ff53b1c3b1fe",
  measurementId: "G-9XZ9ZM0EFF"
};


const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app)
const analytics = getAnalytics(app);

export { app, firestore, storage, analytics };