import React from 'react'
import Pc from './Pc'
import Mobile from './Mobile'
import Books from './Books'
import Drinks from './Drinks'
import Coffee from './Coffee'
import Clothes from './Clothes'
import Search from './Search'

export default function Products() {
  return (
    <div className='relative top-[12vh]'>
        <div className='bg-white rounded-lg'>
          <div className='mx-5 pt-3'>
            <h5 className='mb-1 mt-3 p-0 font-bold'>Search Products</h5>
            <hr className='p-0 m-0 border-2'/>
          </div>
          <Search/>
        </div>
        <Pc/>
        <Mobile/>
        <Books/>
        <Drinks/>
        <Coffee/>
        <Clothes/>
    </div>
  )
}
