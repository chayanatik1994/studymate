// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABJu1gID03TEFCKCyE9PnPgdz7uQqflqI",
  authDomain: "study-mate-server.firebaseapp.com",
  projectId: "study-mate-server",
  storageBucket: "study-mate-server.firebasestorage.app",
  messagingSenderId: "331972829913",
  appId: "1:331972829913:web:65e74194282487076a54c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;