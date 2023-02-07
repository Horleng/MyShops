import React from 'react'
import Student from "../images/student.png"
import { Link } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs'
import { GiLifeBar } from 'react-icons/gi'
import { FcBusiness } from 'react-icons/fc'
import { IoSchool } from 'react-icons/io5'
export default function Introduct() {
    const aboutLife = [
        { title: "ទ្រីស្ដីអ្នកប្រាជ្ញ", link: "/" },
        { title: "ធម៏ព្រះពុទ្ធ", link: "/" },
        { title: "រឿងអប់រំ", link: "/" },
    ];
    const business = [
        { title: "មហាសិដ្ឋីអាមេរិក", link: "/" },
        { title: "ទស្សនះការរកស៊ី", link: "/" },
        { title: "សង្គម", link: "/" },
    ]
    const stEdu = [
        { title: "សកលវិទ្យាល័យ", link: "/" },
        { title: "វិទ្យាល័យ", link: "/" },
        { title: "អនុវិទ្យាល័យ", link: "/" },
        { title: "បឋមសិក្សា", link: "/" },
    ]
    return (
        <div className='p-4 flex justify-around gap-5'>
            <div className='flex-1'>
                <img src="https://s31606.pcdn.co/wp-content/uploads/2019/03/books-store-exterior-picture-id874114336.jpg" alt=""
                    className='w-[500px] rounded-lg transition-transform hover:scale-[1.05]' />
            </div>
            <div className='flex-[0.5]'>
                <h6 className='mb-0 flex gap-2'><GiLifeBar/>Aboute Life</h6>
                <hr className='p-0 m-0 border-2' />
                <ul className='m-0 p-0 flex flex-col gap-1 mt-2'>
                    {   
                        aboutLife.map(ls => (
                            <Link className='no-underline' to={ls.link} key={ls.title}>
                                <li  className=' font-Hanuman py-1 rounded-md hover:bg-gray-200 hover:text-red-600 flex items-center justify-between'>
                                    {ls.title}<BsArrowRightShort/>
                                </li>
                            </Link>
                        ))
                    }
                </ul>

            </div>
            <div className='flex-[0.5]'>
                <h6 className='mb-0 flex gap-2'><FcBusiness/>Business</h6>
                <hr className='p-0 m-0 border-2' />
                <ul className='m-0 p-0 flex flex-col gap-1 mt-2'>
                    {
                        business.map(ls => (
                            <Link className='no-underline' to={ls.link}  key={ls.title}>
                                <li className='font-Hanuman py-1 rounded-md hover:bg-gray-200 hover:text-red-600 flex items-center justify-between'>
                                    {ls.title}<BsArrowRightShort/>
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
            <div className='flex-[0.5]'>
                <h6 className='mb-0 flex gap-2'><IoSchool/>Standard Educations</h6>
                <hr className='p-0 m-0 border-2' />
                <ul className='m-0 p-0 flex flex-col gap-1 mt-2'>
                    {
                        stEdu.map(ls => (
                            <Link className='no-underline' to={ls.link}  key={ls.title}>
                                <li className='font-Hanuman py-1 rounded-md hover:bg-gray-200 hover:text-red-600 flex items-center justify-between'>
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
