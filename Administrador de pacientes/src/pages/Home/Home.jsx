import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../../firebase/firebase.config';

const Home = () => {

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });

    }
    return (
        <div>
            <button onClick={handleLogout}>Logout</button>

        </div>
    )
}

export default Home