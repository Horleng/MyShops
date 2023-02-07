import React from 'react'
import Card from './Card-2'
import Book from "../images/Book.png"
import { AiOutlineArrowRight } from 'react-icons/ai'
function Books() {
    return (
        <div className=' bg-white overflow-auto mt-3 rounded-lg'>
            <div className='mx-5'>
                <h5 className='mb-1 mt-3 p-0 font-bold'>Are you looking for Books?</h5>
                <hr className='p-0 m-0 border-2 mb-3' />
                <div className=' overflow-auto mb-4'>
                    <div className=' my-3 flex justify-between gap-5'>
                        <Card title="Study And Love" price="1.2$" qty="56" img={Book}/>
                        <Card title="Study And Love" price="1.2$" qty="56" img={Book}/>
                        <Card title="Study And Love" price="1.2$" qty="56" img={Book}/>
                        <Card title="Study And Love" price="1.2$" qty="56" img={Book}/>
                        <Card title="Study And Love" price="1.2$" qty="56" img={Book}/>
                        <Card title="Study And Love" price="1.2$" qty="56" img={Book}/>
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

export default Books;