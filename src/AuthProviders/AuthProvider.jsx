import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { initializeApp } from "firebase/app";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);


export const UserContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const profileUpdate = () => {
        return updateProfile(user);
    }
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider);
    }
    const logOut = () => {
        return signOut(auth);
    }
    const resetPassword =(email)=>{
        return sendPasswordResetEmail(auth ,email);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }

    }, [])

    const userInfo = {
        user,
        loading,
        profileUpdate,
        registerUser,
        logInUser,
        googleSignIn,
        githubSignIn,
        resetPassword,
        logOut
    };
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;