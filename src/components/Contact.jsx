import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { AiOutlineMail,AiFillPhone } from 'react-icons/ai'
import Comment from './Comment'
export default function Contact() {
  return (
    <div className='relative top-[15vh] bg-white'>
      <div>
        <img src="https://www.cloud4c.com/sites/default/files/2022-07/cloud4c-company-contact-1Desktop.jpg" alt=""
          className='w-[100%] rounded-lg' />
      </div>
      <div className=' mt-5'>
        <h1 className='flex justify-center'>Cotact Us</h1>
        <div className='flex justify-evenly mt-5'>
          <div className=' w-[25%] h-[30vh] rounded-lg'>
            <span className='flex flex-col gap-1 items-center'>
              <IoLocationSharp size="30px" />
              <h6>Address</h6>
            </span>
            <span className='flex flex-col items-center'>
              <p className='text-xs underline text-blue-700'>department 1 #ffd700 PP Toul Kork</p>
              <p className='text-xs underline text-blue-700'>department 1 #ffd700 PP Toul Kork</p>
              <p className='text-xs underline text-blue-700'>department 1 #ffd700 PP Toul Kork</p>
              <p className='text-xs underline text-blue-700'>department 1 #ffd700 PP Toul Kork</p>
            </span>
          </div>
          <div className=' w-[25%] h-[30vh] rounded-lg'>
            <span className='flex flex-col gap-1 items-center'>
              <AiFillPhone size="30px" />
              <h6>Phone</h6>
            </span>
            <span className='flex flex-col items-center'>
              <p className='text-xs underline text-blue-700'>+885 096 222 888</p>
              <p className='text-xs underline text-blue-700'>+885 097 222 888</p>
              <p className='text-xs underline text-blue-700'>+885 0912 222 888</p>
              <p className='text-xs underline text-blue-700'>+885 0988 222 888</p>
            </span>
          </div>
          <div className=' w-[25%] h-[30vh] rounded-lg'>
            <span className='flex flex-col gap-1 items-center'>
              <AiOutlineMail size="30px" />
              <h6>Email</h6>
            </span>
            <span className='flex flex-col items-center'>
              <p className='text-xs underline text-blue-700'>Example@worl.shop.kh</p>
              <p className='text-xs underline text-blue-700'>Example@worl.shop.kh</p>
              <p className='text-xs underline text-blue-700'>Example@worl.shop.kh</p>
              <p className='text-xs underline text-blue-700'>Example@worl.shop.kh</p>
            </span>
          </div>
        </div>
      </div>
      <Comment/>
    </div>
  )
}
