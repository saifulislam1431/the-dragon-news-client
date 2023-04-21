import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { initializeApp } from "firebase/app";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);


export const UserContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const registerUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth , email , password);
    }
    const logInUser =(email , password)=>{
        return signInWithEmailAndPassword(auth , email , password);
    }
    const googleSignIn = () =>{
       return signInWithPopup(auth , googleProvider);
    }
    const githubSignIn = () =>{
        return signInWithPopup(auth , githubProvider);
     }
     const logOut =()=>{
        return signOut(auth);
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
        registerUser,
        logInUser,
        googleSignIn,
        githubSignIn,
        logOut
    };
    return (
        <UserContext.Provider value={userInfo}>
         {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;