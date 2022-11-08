import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from '../firebase/Firebase.config';



const auth = getAuth(app)
export const AuthContext = createContext()

const UserContext = ({children}) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  //signUp-
  const SignUp = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
  }


  const authInfo = {
    SignUp
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;