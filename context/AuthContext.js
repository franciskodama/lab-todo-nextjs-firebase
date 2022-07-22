import React, { useContext, useState, useEffect, useRef } from "react";
import { auth } from '../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { async } from "@firebase/util";

const AuthContext = React.createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [ currentUser, setCurrentUser ] = useState('')
    const [ loading, setLoading ] = useState(true)
    // const [ error, setError ] = useState(null)

    const userInfo = useRef()

    const signup = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        return
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout,
        userInfo
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}