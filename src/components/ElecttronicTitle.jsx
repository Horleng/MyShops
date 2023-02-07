import React from 'react'
import Electronic from "../images/Electronic.png"
import { Link } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs'
import {RiComputerFill} from 'react-icons/ri'
import { AiTwotoneMobile ,AiFillFlag} from "react-icons/ai";
export default function ElecttronicTitle() {
    const pc = [
        { title: "Apple", link: "/" },
        { title: "Asus", link: "/" },
        { title: "Lenovo", link: "/" },
        { title: "Dell", link: "/" },
    ];
    const mobile = [
        { title: "Apple", link: "/" },
        { title: "Oppo", link: "/" },
        { title: "Sumsung", link: "/" },
        { title: "Hauwei", link: "/" },
    ]
    const Country = [
        { title: "United State (US)", link: "/" },
        { title: "South Korea", link: "/" },
        { title: "China", link: "/" },
    ]
    return (
        <div className='p-4 flex justify-around gap-5'>
            <div className='flex-1'>
                <img src={Electronic} alt=""
                    className='h-[200px] rounded-lg transition-transform hover:scale-[1.05]' />
            </div>
            <div className='flex-[0.5]'>
                <h6 className='mb-0 flex gap-2'><RiComputerFill/>Computer</h6>
                <hr className='p-0 m-0 border-2' />
                <ul className='m-0 p-0 flex flex-col gap-1 mt-2'>
                    {
                        pc.map(ls => (
                            <Link className='no-underline' to={ls.link}  key={ls.title}>
                                <li className=' py-1 rounded-md hover:bg-gray-200 hover:text-red-600 flex items-center justify-between'>
                                    {ls.title}<BsArrowRightShort/>
                                </li>
                            </Link>
                        ))
                    }
                </ul>

            </div>
            <div className='flex-[0.5]'>
                <h6 className='mb-0 flex gap-2'><AiTwotoneMobile/>Mobile</h6>
                <hr className='p-0 m-0 border-2' />
                <ul className='m-0 p-0 flex flex-col gap-1 mt-2'>
                    {
                        mobile.map(ls => (
                            <Link className='no-underline' to={ls.link}  key={ls.title}>
                                <li className='py-1 rounded-md hover:bg-gray-200 hover:text-red-600 flex items-center justify-between'>
                                    {ls.title}<BsArrowRightShort/>
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
            <div className='flex-[0.5]'>
                <h6 className='mb-0 flex gap-2'><AiFillFlag/>Product's Country</h6>
                <hr className='p-0 m-0 border-2' />
                <ul className='m-0 p-0 flex flex-col gap-1 mt-2'>
                    {
                        Country.map(ls => (
                            <Link className='no-underline' to={ls.link}  key={ls.title}>
                                <li className='py-1 rounded-md hover:bg-gray-200 hover:text-red-600 flex items-center justify-between'>
                                    {ls.title}<BsArrowRightShort/>
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
