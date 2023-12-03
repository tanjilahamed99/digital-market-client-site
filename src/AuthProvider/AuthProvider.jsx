
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../firebase/firebase-config';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)

    const [user, setUser] = useState(null)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLogout = () => {
        return signOut(auth)
    }

    const resetUserPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authData = {
        userLogin,
        createUser,
        user,
        loading,
        userLogout,
        resetUserPassword
    }

    return (
        <AuthContext.Provider value={authData}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;