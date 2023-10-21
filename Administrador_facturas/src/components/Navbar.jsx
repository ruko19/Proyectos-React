import React from 'react';
import { BsFillMoonFill } from "react-icons/bs";
import ImgAvatar from "../assets/AVATARRUKO.jpg"
import { Outlet } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='flex w-full'>
            <nav className='bg-nav flex flex-col justify-between items-center'>
                <figure>s
                    <img src="" alt="" />
                </figure>
                <div className='w-full flex flex-col justify-center items-center gap-10'>
                    <div className='mx-auto color-icon text-2xl cursor-pointer'>
                        <BsFillMoonFill />
                    </div>
                    <figure className='mb-6 divide-x-0 border-cyan-50'>
                        <img className=' rounded-full w-11' src={ImgAvatar} alt="" />
                    </figure>

                </div>

            </nav>
            <Outlet />
        </div>
    )
}

export default Navbar
