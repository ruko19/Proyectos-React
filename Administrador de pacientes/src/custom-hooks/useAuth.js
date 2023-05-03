import { auth } from '../firebase/firebase.config';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import React, { useEffect, useState } from 'react'

const useAuth = () => {
    const [currentUser, setcurrentUser] = useState({});


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setcurrentUser(user)
            } else {
                setcurrentUser(null)
            }
        });

    }, [])

    return {
        currentUser,

    }

}

export default useAuth