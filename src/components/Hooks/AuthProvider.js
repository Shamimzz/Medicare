
import React,{ createContext } from 'react';
import useFirebase from '../UseFirebase/Usefirebase';

export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    // const {children} = props;
    // const allContext = useFirebase(); 
    return (
        <AuthContext.Provider value={useFirebase()}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;