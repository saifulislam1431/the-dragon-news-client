import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { initializeApp } from "firebase/app";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);


export const UserContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const googleSignIn = () =>{
       return signInWithPopup(auth , googleProvider);
    }
    const githubSignIn = () =>{
        return signInWithPopup(auth , githubProvider);
     }


     useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth , currentUser=>{
          setUser(currentUser)
         })
         return()=>{
            unsubscribe();
         }
    
     },[])

    const userInfo = {
        user,
        googleSignIn,
        githubSignIn
    };
    return (
        <UserContext.Provider value={userInfo}>
         {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;