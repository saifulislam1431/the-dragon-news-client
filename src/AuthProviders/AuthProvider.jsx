import React from 'react';
import { createContext } from 'react';


export const UserContext = createContext(null);

const AuthProvider = ({children}) => {
    const userInfo = {name: "Saiful"};
    return (
        <UserContext.Provider value={userInfo}>
         {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;