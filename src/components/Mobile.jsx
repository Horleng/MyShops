import React from 'react'
import Card from './Card-2'
import Iphone from "../images/Iphone.png"
import { AiOutlineArrowRight } from 'react-icons/ai'
function Mobile() {
    return (
        <div className=' bg-white overflow-auto mt-3 rounded-lg'>
            <div className='mx-5'>
                <h5 className='mb-1 mt-3 p-0 font-bold'>Are you looking for mobile phone?</h5>
                <hr className='p-0 m-0 border-2 mb-3' />
                <div className=' overflow-auto mb-4'>
                    <div className=' my-3 flex justify-between gap-5'>
                        <Card title="iphone xs max" price="500$" qty="56" img={Iphone}/>
                        <Card title="iphone xs max" price="500$" qty="56" img={Iphone}/>
                        <Card title="iphone xs max" price="500$" qty="56" img={Iphone}/>
                        <Card title="iphone xs max" price="500$" qty="56" img={Iphone}/>
                        <Card title="iphone xs max" price="500$" qty="56" img={Iphone}/>
                        <Card title="iphone xs max" price="500$" qty="56" img={Iphone}/>
                        <span className='flex items-center'>
                            <span className='rounded-full hover:bg-gray-200 cursor-pointer'>
                                <AiOutlineArrowRight fill='green' size="30px" />
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mobile;