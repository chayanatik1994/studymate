// firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
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

// Initialize Firebase Auth
const auth = getAuth(app);

// Export both app and auth
export { auth };
export default app;
