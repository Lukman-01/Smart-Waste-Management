import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA-r21Wxl2qRtnSGvfGE4VUrmEb-TRfspg",
  authDomain: "smartbin-ibukun.firebaseapp.com",
  databaseURL: "https://smartbin-ibukun-default-rtdb.firebaseio.com",
  projectId: "smartbin-ibukun",
  storageBucket: "smartbin-ibukun.appspot.com",
  messagingSenderId: "269237747855",
  appId: "1:269237747855:web:629c28087dca647e0ab0fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

