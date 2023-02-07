import React from 'react'
import Card from './Card-2'
import MyCoffee from "../images/Coffee.png"
import { AiOutlineArrowRight } from 'react-icons/ai'
function Coffee() {
    return (
        <div className=' bg-white overflow-auto mt-3 rounded-lg'>
            <div className='mx-5'>
                <h5 className='mb-1 mt-3 p-0 font-bold'>Are you looking for the Coffee?</h5>
                <hr className='p-0 m-0 border-2 mb-3'/>
                <p className='indent-10 text-xs'>Amnzing ,Order now we will delivery for you now...!</p>
                <div className=' overflow-auto mb-4'>
                    <div className=' my-3 flex justify-between gap-5'>
                        <Card title="Amazone Coffee" price="0.99$" qty="available now" img={MyCoffee}/>
                        <Card title="Amazone Coffee" price="0.99$" qty="available now" img={MyCoffee}/>
                        <Card title="Amazone Coffee" price="0.99$" qty="available now" img={MyCoffee}/>
                        <Card title="Amazone Coffee" price="0.99$" qty="available now" img={MyCoffee}/>
                        <Card title="Amazone Coffee" price="0.99$" qty="available now" img={MyCoffee}/>
                        <Card title="Amazone Coffee" price="0.99$" qty="available now" img={MyCoffee}/>
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

export default Coffee;