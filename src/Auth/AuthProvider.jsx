
import React, { useEffect, useState } from 'react'
import { AuthContext } from './Authcontext'

import { auth } from '../FireBase/Firebase.config'
import { createUserWithEmailAndPassword,  GoogleAuthProvider,  onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { ToastContainer } from 'react-toastify';

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
 const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Signup with email/password
  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login with email/password
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Login with Google
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    setLoading,
    setUser,
    signUpUser,
    signInUser,
    logOut,
    googleSignIn,
  };
  return (
<AuthContext value={authInfo}>
            {children}
               <ToastContainer/>
        </AuthContext>
     
  )
}

export default AuthProvider