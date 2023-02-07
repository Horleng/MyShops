import React from 'react'
import Card from './Card-1';
import {GiClothes,GiSodaCan} from 'react-icons/gi'
import {RiComputerFill} from 'react-icons/ri'
import {BsFillBookFill} from 'react-icons/bs'
import { AiTwotoneMobile,AiOutlineCoffee } from "react-icons/ai";
function TypeProductList() {
  return (
    <div>
        <div className='mt-[20vh] flex gap-3 justify-between'>
                <div className=' bg-white shadow-lg rounded-lg'>
                    <div className='flex flex-col mx-3 pt-3'>
                        <h6 className='font-bold text-sm flex items-center gap-1'><AiTwotoneMobile />Mobiles</h6>
                        <div className='flex gap-2'>
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
                <div className=' bg-white shadow-lg rounded-lg'>
                    <div className='flex flex-col mx-3 pt-3'>
                        <h6 className='font-bold text-sm flex items-center gap-1'><RiComputerFill />Computers</h6>
                        <div className='flex gap-2'>
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
                <div className=' bg-white shadow-lg rounded-lg'>
                    <div className='flex flex-col mx-3 pt-3'>
                        <h6 className='font-bold text-sm flex items-center gap-1'><GiSodaCan />Energy Drinks</h6>
                        <div className='flex gap-2'>
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-10 flex gap-3 justify-between'>
                <div className=' bg-white shadow-lg rounded-lg'>
                    <div className='flex flex-col mx-3 pt-3'>
                        <h6 className='font-bold text-sm flex items-center gap-1'><AiOutlineCoffee />Coffe</h6>
                        <div className='flex gap-2'>
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
                <div className=' bg-white shadow-lg rounded-lg'>
                    <div className='flex flex-col mx-3 pt-3'>
                        <h6 className='font-bold text-sm flex items-center gap-1'><BsFillBookFill />Books</h6>
                        <div className='flex gap-2'>
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
                <div className=' bg-white shadow-lg rounded-lg'>
                    <div className='flex flex-col mx-3 pt-3'>
                        <h6 className='font-bold text-sm flex items-center gap-1'><GiClothes />clothes</h6>
                        <div className='flex gap-2'>
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default TypeProductList