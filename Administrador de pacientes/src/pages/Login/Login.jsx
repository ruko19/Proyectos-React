import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase/firebase.config';


const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("")
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState(false)

    const handlesubmit = async (e) => {
        e.preventDefault();
        setisLoading(true)
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            setisLoading(false)
            navigate('/')


        } catch (error) {
            setError(true)
            console.log(error.message);
            setisLoading(false)
        }
    }

    const googleAuth = async () => {

        const provider = new GoogleAuthProvider()
        try {
            const res = await signInWithPopup(auth, provider);
            navigate('/')
            console.log(res.user);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='w-full h-screen bg-slate-600' >
            <div className='w-1/2 h-screen bg-slate-50 grid place-content-center'>
                <div className='border w-96 p-6 shadow-2xl rounded-2xl '>
                    <h2 className='text-5xl text-slate-800 font-bold my-6'>Sing in</h2>
                    <form onSubmit={handlesubmit} className='text-center' action="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <label className="input-group  ">
                                <span>Email</span>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="info@site.com" className="w-full input input-bordered  " />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Password</span>
                            </label>
                            <label className="input-group mb-7  ">
                                <span>Password</span>
                                <input autoComplete='autoComplete' onChange={(e) => setpassword(e.target.value)} type="password" placeholder="****" className="w-full input input-bordered" />
                            </label>
                        </div>

                        <button type='submit' className="btn btn-wide block mx-auto my-4  ">Sign in</button>
                        <p className='mt-5'>Dont´t have an account? <Link to={'/register'} className='link link-neutral'>Sign up</Link></p>
                    </form>
                    <button typeof='button' className="btn btn-wide block mx-auto  bg-white  ">
                        <div onClick={googleAuth} className='flex justify-center items-center gap-3  '>
                            <FcGoogle className='inline-block' />
                            Google
                        </div>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Login