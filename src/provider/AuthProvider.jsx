import React, { createContext, useState, useEffect } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import app from '../firebase/firebase.config';
import { toast } from 'react-toastify';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const syncUser = (data) => {
    setUser(data);
    if (data) localStorage.setItem('user', JSON.stringify(data));
    else localStorage.removeItem('user');
  };

  const createUser = async (email, password, name, photoURL) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(result.user, { displayName: name, photoURL });
    syncUser(result.user);
    toast.success('Account created successfully!');
    return result.user;
  };

  const loginUser = async (email, password) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    syncUser(result.user);
    toast.success(`Welcome back, ${result.user.displayName || result.user.email}`);
    return result.user;
  };

  const loginWithGoogle = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    syncUser(result.user);
    toast.success(`Welcome, ${result.user.displayName}`);
    return result.user;
  };

  const forgotPassword = async (email) => {
    if (!email) return toast.error("Enter your email.");
    await sendPasswordResetEmail(auth, email);
    toast.info('Password reset email sent.');
  };

  const logOut = async () => {
    await signOut(auth);
    syncUser(null);
    toast.info('Logged out successfully.');
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      syncUser(currentUser || null);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, createUser, loginUser, loginWithGoogle, forgotPassword, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
