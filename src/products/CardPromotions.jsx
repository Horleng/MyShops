import React from 'react'
import {Link} from 'react-router-dom'
import Coffee from "../images/Coffee.png";
const CardPromotions = () => {
    return (
        <div className='w-[14rem] h-[20rem] rounded-lg shadow-lg'>
            <div className='h-[50%] bg-red-400 rounded-t-lg '>
                <img src={Coffee} alt="" className='rounded-lg transition-transform hover:scale-[1.1] pt-3 w-[80%] mx-auto' />
            </div>
            <span>
                <h6 className='font-bold flex justify-center mt-2'>Coffee</h6>
                <p className='text-xs m-0 p-0 flex justify-center'>dicount 30% off</p>
                <span className='flex justify-center gap-2 items-center mt-1'>
                    <h6 className='font-bold text-blue-500'>12$</h6>
                    <h5 className='font-bold'>{"-->"}</h5>
                    <h6 className='font-bold text-green-500'>5$</h6>
                </span>
                <span className='flex justify-center mt-2'>
                    <Link to="" className='w-[40%] m-0 p-0'>
                        <button className='text-xs py-2 px-4 text-gray-50 bg-blue-500 hover:bg-blue-600 rounded-full'>Order</button>
                    </Link>
                    <Link to="" className='w-[40%] m-0 p-0'>
                        <button className='text-xs py-2 px-4 text-gray-50 bg-green-500 hover:bg-green-600 rounded-full'>more</button>
                    </Link>
                </span>
                <span className='flex justify-between mx-2 mt-2'>
                    <p className='text-xs text-gray-300'>10-01-2023</p>
                    <p className='text-xs text-gray-300'>15-01-2023</p>
                </span>
            </span>
        </div>
    )
}

export default CardPromotions