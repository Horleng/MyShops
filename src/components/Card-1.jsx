import React from 'react'
import Books from '../images/Book.png'
import { Link } from 'react-router-dom'
export default function Card() {
  return (
    <div className='text-center mb-4'>
        <Link  to="/kj">
          <img src={Books} alt='' className='w-[150px] bg-gray-200 rounded-md transition-transform hover:scale-[1.1]'/>
        </Link>
        <p className='font-bold text-sm m-0 p-0 pt-1'>66$</p>
        <p className='text-xs m-0 p-0'>Books</p>
    </div>
  )
}
