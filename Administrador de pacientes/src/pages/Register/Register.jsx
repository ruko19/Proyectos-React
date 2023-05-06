import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { setUsers } from '../../redux/slices/usersSlice';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';



const Register = () => {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [id, setId] = useState("")
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();


    const navigate = useNavigate();

    const notifly = () => {
        toast.success('Account created')
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const newUser = {
            userName,
            email,
            password,
            id,
        }
        try {

            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user
            dispatch(setUsers({ newUser, id: user.uid }))

            setLoading(false)
            // navigate('/login')
            notifly()
            setTimeout(() => {
                setLoading(true)
                navigate('/login');
                setLoading(false)
                // redirecciona a la página de login después de 1 segundo
            }, 4000);
        } catch (error) {

        }

    }



    return (
        <div className='w-full h-screen bg-slate-600' >
            <ToastContainer />
            {
                loading ? <p>Loading...</p> :
                    <div className='w-1/2 h-screen bg-slate-50 grid place-content-center'>

                        <div className='border w-96 p-6 shadow-2xl rounded-2xl '>
                            <h2 className='text-5xl text-slate-800 font-bold my-6'>Register</h2>
                            <form onSubmit={handleSubmit} className='text-center' action="">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">UserName</span>
                                    </label>
                                    <label className="input-group   ">
                                        <span>UserName</span>
                                        <input onChange={e => setUserName(e.target.value)} type="text" placeholder="Your Username" className=" w-full input input-bordered" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <label className="input-group  ">
                                        <span>Email</span>
                                        <input onChange={e => setEmail(e.target.value)} type="email" placeholder="info@site.com" className="w-full input input-bordered  " />
                                    </label>
                                </div>
                                <div className="form-control mb-7">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <label className="input-group mb-7  ">
                                        <span>Password</span>
                                        <input onChange={e => setPassword(e.target.value)} autoComplete='none' type="password" placeholder="****" className="w-full input input-bordered" />
                                    </label>
                                </div>
                                <button type='submit' className="btn btn-wide block mx-auto my-4  ">Sign in</button>
                                <button onClick={handlegoole} className="btn btn-wide block mx-auto  bg-white  ">
                                    <div className='flex justify-center items-center gap-3  '>
                                        <FcGoogle className='inline-block' />
                                        Google
                                    </div>
                                </button>
                                <p className='mt-5'>Already have an accouunt? <Link to={'/login'} className='link link-neutral'>Login Now</Link></p>
                            </form>

                        </div>
                    </div>
            }




        </div>
    )
}

export default Register