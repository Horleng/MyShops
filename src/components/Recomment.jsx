import React from 'react'
import { RiUserVoiceFill } from 'react-icons/ri'
import { BsArrowRightShort } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Recomment = () => {
    const recm = [
        { title: "Promotions", link: "/products/Promotions" },
        { title: "Best Sell", link: "/products/best-sell" },
        { title: "New Items", link: "/products/new-items" },
    ]
    return (
        <div>
            <h6>Let's Buy</h6>
            <hr className='m-0 p-0' />
            <ul className='m-0 p-0 mt-2'>
                {
                    recm.map(ls => (
                        <Link to={ls.link} key={ls.title} className='no-underline'>
                            <li  className='px-2 hover:bg-gray-100 p-0 rounded-lg flex justify-between items-center'>
                                <div className='flex items-center cursor-pointer'>
                                    <RiUserVoiceFill />
                                    <p className='hover:text-orange-500 mt-3 ml-3 text-sm'>{ls.title}</p>
                                </div>
                                <BsArrowRightShort className='text-lg' />
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}

export default Recomment;