import React from 'react'
import Dis30 from "../images/dis30.png";
import LinkProducts from '../products/LinkProducts';
import CardPromotions from './CardPromotions'
function Promotions() {
  const ls = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="relative top-[15vh]">
      <div className=' bg-white rounded-lg shadow-lg p-5'>
        <img src="https://www.napiermkt.com/uploads/1/0/9/8/10981970/published/promotion-image-sm_3.jpg?1559742827" alt="" />
      </div>
      <div className=' bg-white rounded-lg shadow-lg mt-3 px-5'>
        <div className='flex justify-center'>
          <img src={Dis30} alt=""
            className='w-[200px]' />
        </div>
        <div className='flex justify-between overflow-x-auto gap-5 py-3 bg-white'>
          {
            ls.map(ls => (
              <div>
                <CardPromotions />
              </div>
            ))
          }
        </div>
      </div>
      {/* 20% */}
      <div className='mt-3 bg-white rounded-lg shadow-lg px-5 pt-3'>
        <div className='flex justify-center'>
          <img src="https://sickkidscmh.ca/wp-content/uploads/2022/05/20-off-group-discount.png" alt="" className='w-[200px]' />
        </div>
        <div className='flex justify-between overflow-x-auto mt-3 gap-5 py-3 bg-white'>
          {
            ls.map(ls => (
              <div>
                <CardPromotions />
              </div>
            ))
          }
        </div>
      </div>
      {/* 10% off */}
      <div className='mt-3 bg-white rounded-lg shadow-lg px-5 pt-3'>
        <div className='flex justify-center'>
          <img src="http://footstep-training.com/wp-content/uploads/2013/08/10off.jpg" alt="" className='w-[200px]' />
        </div>
        <div className='flex justify-between overflow-x-auto mt-3 gap-5 py-3 bg-white'>
          {
            ls.map(ls => (
              <div>
                <CardPromotions />
              </div>
            ))
          }
        </div>
      </div>
      <div className='mt-3 bg-white rounded-lg shadow-lg px-5 pb-5 pt-3'>
        <LinkProducts/>
      </div>
    </div>
  )
}

export default Promotions