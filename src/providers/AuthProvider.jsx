import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
      return signOut(auth);
    };

    const authData = {
        createUser,
        loginUser,
        logOut
    }


    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;