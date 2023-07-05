import React, { createContext, useEffect, useState } from 'react';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

const UserContext = ({children}) => {
  
  const [user, setUser] = useState({displayName: 'JIM'});

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    return signOut(auth);
  }

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  }

  const facebookSignIn = () => {
    return signInWithPopup(auth, facebookProvider);
  }

  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log("user state changed", currentUser)
    })
    return() => {
      unsubscribe();
    }
  }, [])

  const authInfo  = {user, createUser, signIn, logOut, googleSignIn, facebookSignIn, githubSignIn};

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;