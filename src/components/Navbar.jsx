import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Mybutton from "./Button";
import { AiOutlineShoppingCart, AiOutlineLogout } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
export default function Navbar() {
    const listNav = [
        { name: "Home", link: "/" },
        { name: "Products", link: "/products" },
        { name: "AboutUs", link: "/aboutUs" },
        { name: "ContactUs", link: "/contactUs" },
        {
            name:
                <span className='hover:bg-gray-200 flex mt-0 p-1 rounded-full items-center'>
                    <AiOutlineShoppingCart size="22" />
                    <h5 className='m-0 text-green-500 p-0 pt-1'>0</h5>
                </span>,
            link: "/products/favorite"
        }
    ]

    return (
        <header className='lg:flex items-center lg:justify-evenly h-[10vh] w-full bg-white'>
            <nav className='lg:flex-1 text-center'>
                <span>
                    <h3 className='font-patua font-bold'>Shop Projects</h3>
                </span>
            </nav>
            <ul className='lg:flex lg:gap-4 lg:h-[100%] items-center lg:flex-1'>
                {
                    listNav.map(ls => (
                        <NavLink to={ls.link} className='no-underline' key={ls.name}>
                            <li className='hover:text-red-500 cursor-pointer lg:mt-2'>{ls.name}</li>
                        </NavLink>
                    ))
                }
            </ul>
            <div className='flex gap-2 flex-1 justify-evenly items-center cursor-pointer'>
                {
                    true ? <span className='flex gap-2'>
                        <span>
                            <NavLink to="/auth/signin"><Mybutton bg="bg-gray-200 hover:bg-gray-300 hover:text-red-500 rounded-full">Sigin</Mybutton></NavLink>
                        </span>
                        <span>
                            <NavLink to='/auth/signUp'><Mybutton bg="bg-gray-200  hover:bg-gray-300 hover:text-red-500 rounded-full">SigUp</Mybutton></NavLink>
                        </span>
                    </span> :
                        <span className='flex gap-6 items-center'>
                            <span className='p-1 rounded-full hover:bg-green-200 '>
                                <img src="https://yt3.googleusercontent.com/ytc/AMLnZu-s5HJBzUt6g4Mp6vkvFSNCMYDLzci6VajIXrqw=s900-c-k-c0x00ffffff-no-rj" alt=""
                                    className='w-[40px] rounded-full border-2 border-orange-500' />
                            </span>
                            <Link to="/auth/logout">
                                <button className='py-2 px-5 bg-gray-200 rounded-full hover:bg-gray-300 hover:text-red-500'><AiOutlineLogout size="20px" fill='red' /></button>
                            </Link>
                        </span>
                }
            </div>
        </header>
    )
}
