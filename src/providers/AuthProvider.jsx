import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../firebase/firebase.config'
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser= (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }
    const signIn= (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubsribe = onAuthStateChanged(auth, currentUser =>{
            console.log(" in on state chage", currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubsribe()
        }
    } , [])
    const authInfo ={
        user,
        createUser,
        signIn,
        logOut,
        loading

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
