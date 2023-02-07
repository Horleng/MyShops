import React from 'react'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { GiAchievement } from 'react-icons/gi';
export default function About() {
  return (
    <div className='bg-white min-h-screen  relative top-[15vh] rounded-lg'>
      <div className='py-5 mx-5 '>
        <img src="https://eazysites.s3.ap-south-1.amazonaws.com/eazyerp/img/section/aboutupdated.jpg" alt=""
        className='rounded-lg' />
      </div>
      <div className='flex justify-between gap-10 mx-5 py-3'>
        <div className='flex-1'>
          <h4 className='mb-0 flex items-center gap-2 text-orange-500'><AiFillQuestionCircle size="30px" />Did you want to know us?</h4>
          <hr className='m-0 p-0 border-2' />
          <ul className='mt-3 p-0 list-disc indent-5 flex flex-col gap-2 text-sm'>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, cumque</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, cumque</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, cumque</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, cumque</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, cumque</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, cumque</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, cumque</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, cumque</li>
          </ul>
        </div>

        <div className='flex-1'>
          <h4 className='mb-0 flex items-center gap-2 text-orange-500'><GiAchievement size="30px" />Our Achivment</h4>
          <hr className='m-0 p-0 border-2' />
          <ul className='mt-3 p-0 list-disc indent-5 flex flex-col gap-2 text-sm'>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt</li>
          </ul>
        </div>
      </div>

      <div className='mx-5'>
        <span className='flex items-center gap-2'>
          <img src="https://emoryhercules.com/wp-content/uploads/partnership-icon-png-36.jpg" alt=""
            className='w-[40px]' />
          <h1 className='m-0'>Partner</h1>
        </span>
        <hr className='m-0 p-0 border-2' />
        <div className='flex justify-between gap-5 mt-5'>
          <div className='flex-1'>
            <img src="https://fundsnetservices.com/wp-content/uploads/Pros-and-Cons-of-Partnerships.jpg" alt="" />
          </div>
          <div className='flex-1 flex flex-col gap-3 bg-slate-500'>
            <h4 className=' text-orange-500 flex justify-center mt-5'>Apple company</h4>
            <span className='flex justify-center'>
              <ul className='m-0 p-0 list-disc'>
                <li>United Start since 2003 Lorem ipsum dolor sit amet.</li>
                <li>United Start since 2003 Lorem ipsum dolor sit amet.</li>
                <li>United Start since 2003 Lorem ipsum dolor sit amet.</li>
                <li>United Start since 2003 Lorem ipsum dolor sit amet.</li>
              </ul>
            </span>
          </div>
        </div>
        <div className='flex justify-between gap-5 mt-5'>
          <div className='flex-1'>
            <img src="https://www.shutterstock.com/image-photo/banner-template-partner-business-trust-260nw-1630483918.jpg" alt="" />
          </div>
          <div className='flex-1 flex flex-col gap-3 bg-slate-500'>
            <h4 className=' text-orange-500 flex justify-center mt-5'>Sumsung Company</h4>
            <span className='flex justify-center'>
              <ul className='m-0 p-0 list-disc'>
                <li>United Start since 2003 Lorem ipsum dolor sit amet.</li>
                <li>United Start since 2003 Lorem ipsum dolor sit amet.</li>
                <li>United Start since 2003 Lorem ipsum dolor sit amet.</li>
                <li>United Start since 2003 Lorem ipsum dolor sit amet.</li>
              </ul>
            </span>
          </div>
        </div>
        
      </div>
    </div>
  )
}