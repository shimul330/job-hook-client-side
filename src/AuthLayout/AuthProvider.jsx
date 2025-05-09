import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (updateData) =>{
        return updateProfile(auth.currentUser, updateData);
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        });

        return ()=>{
            unSubscribe();
        }
    
    },[])

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        logInUser,
        updateUser
    };

    return <AuthContext value={authData} >
        {children}
    </AuthContext> ;
};

export default AuthProvider;