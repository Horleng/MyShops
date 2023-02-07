import React from 'react'
import Wow from "../images/Wow.png"
import { Link } from 'react-router-dom'
import Pc from "../images/Pc.png"
import Coffee from "../images/Coffee.png"
import Energy from "../images/Energy.png"
import Iphone from "../images/Iphone.png"
import Books from "../images/Book.png"
import Closhes from "../images/Closhes.png"
import { BsArrowRightShort } from "react-icons/bs"
import { RiUserVoiceFill } from "react-icons/ri"
import { AiFillQuestionCircle } from "react-icons/ai"
export default function LinkProducts() {
    const products = [
        { img: Pc, title: "Personal Computer", link: "/products/computer" },
        { img: Iphone, title: "Mobile Phone", link: "/products/mobile" },
        { img: Coffee, title: "Coffee", link: "/products/coffee" },
        { img: Energy, title: "Energy Drink", link: "/products/energy-drink" },
        { img: Books, title: "Books", link: "/products/books" },
        { img: Closhes, title: "Clost", link: "/products/clothes" },
    ];
    const products2 = [
        { img: <RiUserVoiceFill />, title: "Go to promotions", link: "/products/promotions" },
        { img: <RiUserVoiceFill />, title: "Go to best sell", link: "/products/best-sell" },
        { img: <RiUserVoiceFill />, title: "Go to new item", link: "/products/new-items" },
    ]
    return (
        <div className='flex justify-evenly mt-5'>
            <div className='flex-[0.5]'>
                <img src={Wow} alt="" className='w-[500px] mt-5' />
            </div>
            <div className='flex-1'>
                <span className='flex items-center gap-2'>
                    <AiFillQuestionCircle size="25px"/>
                    <h6 className='m-0 p-0'>Where you want to go?</h6>
                </span>
                <hr className='m-0 p-0 border-[3px]'/>
                <ul className='m-0 p-0 grid grid-cols-2 mt-3'>
                    {
                        products.map(ls => (
                            <Link to={ls.link} className='no-underline' key={ls.title}>
                                <li className='hover:bg-gray-100 py-0 px-2 rounded-lg flex justify-between items-center'>
                                    <div className='flex items-center cursor-pointer'>
                                        <div className=' w-[30px] h-[30px] bg-gray-100 rounded-full'>
                                            <img src={ls.img} className='mt-1' />
                                        </div>
                                        <p className='hover:text-orange-500 mt-3 ml-3 text-sm'>{ls.title}</p>
                                    </div>
                                    <BsArrowRightShort className='text-lg' />
                                </li>
                            </Link>
                        ))
                    }
                    {
                        products2.map(ls =>
                            (<Link to={ls.link} key={ls.title} className='no-underline'>
                                <li className='px-2 hover:bg-gray-100 p-0 rounded-lg flex justify-between items-center'>
                                    <div className='flex items-center cursor-pointer'>
                                        <RiUserVoiceFill />
                                        <p className='hover:text-orange-500 mt-3 ml-3 text-sm'>{ls.title}</p>
                                    </div>
                                    <BsArrowRightShort className='text-lg' />
                                </li>
                            </Link>
                            )
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
