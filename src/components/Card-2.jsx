import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
export default function Card(props) {
    const [iconColor, setIconColor] = useState(false);
    return (
        <div>
            <div className='w-[15rem] h-[20rem] bg-white rounded-lg shadow-lg hover:bg-gray-800'>
                <div className='h-[55%] flex justify-center pt-3 bg-slate-500 rounded-t-lg'>
                    <img src={props.img} alt="" className='h-[70%] transition-transform hover:scale-[1.1]' />
                </div>
                <span className='mb-2'>
                    <h6 className='font-bold flex justify-center text-sm mt-2'>{props.title}</h6>
                    <span className='cursor-pointer flex justify-center gap-4' >
                        <h6 className='font-bold text-sm'>{props.price}/--</h6>
                        <span onClick={()=>setIconColor(!iconColor)}>
                            {
                                iconColor ? <AiFillHeart fill='red' size="20px"/> : <AiOutlineHeart size="20px" />
                            }
                        </span>
                    </span>
                    <div className='flex justify-center mt-2'>
                        <Link to="" className='w-[40%] m-0 p-0'>
                            <button className='text-xs py-2 px-4 text-gray-50 bg-blue-500 hover:bg-blue-600 rounded-full'>Order</button>
                        </Link>
                        <Link to="" className='w-[40%] m-0 p-0'>
                            <button className='text-xs py-2 px-4 text-gray-50 bg-green-500 hover:bg-green-600 rounded-full'>more</button>
                        </Link>
                    </div>
                    <p className='text-xs flex justify-center my-2'>{props.qty} left</p>
                </span>
            </div>
        </div>
    )
}
