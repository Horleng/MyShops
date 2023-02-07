import React from 'react'
import Card from './Card-2'
import Labtop from "../images/Pc.png"
import { AiOutlineArrowRight } from 'react-icons/ai'
function Pc() {
    return (
        <div className=' bg-white overflow-auto  rounded-lg mt-3'>
            <div className='mx-5'>
                <h5 className='mb-1 mt-3 p-0 font-bold'>Are you looking for the labtop?</h5>
                <hr className='p-0 m-0 border-2 mb-3' />
                <div className=' overflow-auto mb-4'>
                    <div className=' my-3 flex justify-between gap-5'>
                        <Card title="Asus VivoBook Oled" price="1200$" qty="20" img={Labtop}/>
                        <Card title="Asus VivoBook Oled" price="1200$" qty="20" img={Labtop}/>
                        <Card title="Asus VivoBook Oled" price="1200$" qty="20" img={Labtop}/>
                        <Card title="Asus VivoBook Oled" price="1200$" qty="20" img={Labtop}/>
                        <Card title="Asus VivoBook Oled" price="1200$" qty="20" img={Labtop}/>
                        <Card title="Asus VivoBook Oled" price="1200$" qty="20" img={Labtop}/>
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

export default Pc