import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/Firebase.config';



const auth = getAuth(app)
export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()

const UserContext = ({children}) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  //signUp-
  const SignUp = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //login-
  const logIn = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  //Update Name-
  const updateUserProfile = (name, imageUrl) =>{
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imageUrl
    })
  }

  //signOut-
  const signOutUser = () =>{
    setLoading(true)
    return signOut(auth)
  }

  //loginWithGoogle-
  const loginWithGoogle = () =>{
    return signInWithPopup(auth, googleProvider)
  }


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUserInfo =>{
      setUser(currentUserInfo)
      setLoading(false)
    })
    return () => unsubscribe();
  },[])

  const authInfo = {
    user,
    loading,
    SignUp,
    updateUserProfile,
    logIn,
    loginWithGoogle,
    signOutUser
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;