import React,{useState} from 'react';
import Coffee from "../images/Coffee.png";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Favorite = () => {
    const [iconColor, setIconColor] = useState(true);
    return (
        <div className='relative top-[15vh] rounded-lg bg-white p-5 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
            <div className='w-[15rem] h-[20rem] bg-white rounded-lg shadow-lg hover:bg-gray-800'>
                <div className='h-[55%] flex justify-center pt-3 bg-slate-500 rounded-t-lg'>
                    <img src={Coffee} alt="" className='h-[70%] transition-transform hover:scale-[1.1]' />
                </div>
                <span className='mb-2'>
                    <h6 className='font-bold flex justify-center text-sm mt-2'>Amazone coffee</h6>
                    <span className='cursor-pointer flex justify-center gap-4' >
                        <h6 className='font-bold text-sm'>1.2$/--</h6>
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
                    <span className='flex justify-between mt-3 mx-2'>
                        <p className='text-xs'>10 left</p>
                        <p className='text-xs'>Mon,Jan-01-2023</p>
                    </span>
                </span>
            </div>
        </div>
    );
};


export default Favorite;
