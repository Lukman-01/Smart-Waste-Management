// import { initializeApp } from 'firebase/app';
// import { getDatabase } from 'firebase/database';

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
// };

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

// export { database };


// Import the functions you need from the SDKs you need
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

