import React from 'react'
import Pc from "../images/Pc.png"
import Coffee from "../images/Coffee.png"
import Energy from "../images/Energy.png"
import Iphone from "../images/Iphone.png"
import Books from "../images/Book.png"
import Closhes from "../images/Closhes.png"
import { BsArrowRightShort } from 'react-icons/bs'
import { Link } from 'react-router-dom'
export default function ListCateogory() {
    const list = [
        { img: Pc, title: "Personal Computer",link:"/products/computer" },
        { img: Iphone, title: "Mobile Phone" ,link:"/products/mobile"},
        { img: Coffee, title: "Coffee",link:"/products/coffee" },
        { img: Energy, title: "Energy Drink",link:"/products/energy-drink" },
        { img: Books, title: "Books" ,link:"/products/books"},
        { img: Closhes, title: "Clost" ,link:"/products/clothes"},
    ]
    return (
        <div className=''>
            <h6>My Products</h6>
            <hr className='m-0' />
            <ul className='flex flex-col m-0 p-0 '>
                {
                    list.map((ls) => (
                        <Link to={ls.link} className='no-underline'  key={ls.title}>
                            <li className='hover:bg-gray-100 py-0 px-2 rounded-lg flex justify-between items-center'>
                            <div className='flex items-center cursor-pointer'>
                                <div className=' w-[30px] h-[30px] bg-gray-100 rounded-full'>
                                    <img src={ls.img} className='mt-1' />
                                </div>
                                <p className='hover:text-orange-500 mt-3 ml-3 text-sm'>{ls.title}</p>
                            </div>
                            <BsArrowRightShort className='text-lg'/>
                        </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}
