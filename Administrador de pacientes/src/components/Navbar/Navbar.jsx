import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../../firebase/firebase.config';

const Navbar = () => {

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <nav>
            <div className="navbar bg-base-100 flex justify-between px-7">
                <a className="btn btn-ghost normal-case text-xl">Administrador de pacientes de veterinaria</a>
                <button onClick={handleLogout} className="btn btn-active btn-ghost">LogOut</button>
            </div>
        </nav>
    )
}

export default Navbar