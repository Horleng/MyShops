import React from 'react'
import Mobiles from "../images/Iphone.png";
import Card from '../components/Card-2';
import LinkProducts from '../products/LinkProducts';
function Mobile() {
  return (
    <div className='relative top-[13vh] bg-white rounded-lg p-5'>
            <span className='flex items-center gap-2'>
                <img src="https://img.xfinitymobile.com/image/upload/c_fit,f_auto,q_auto,fl_lossy/v1660588405/client/v2/images/XM-5.0/XM-5.0-a-spot-1280.jpg" alt="" 
                className='w-[40px] h-[40px] rounded-full'/>
                <h4 className='m-0 mt-2 font-bold'>Mobile phone</h4>
            </span>
            <hr className='p-0 m-0 border-2'/>
            <div className='mt-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3'>
                <Card img={Mobiles} title="I phone xs max" price="1200$" qty="13"/>
                <Card img={Mobiles} title="I phone xs max" price="1200$" qty="13"/>
                <Card img={Mobiles} title="I phone xs max" price="1200$" qty="13"/>
                <Card img={Mobiles} title="I phone xs max" price="1200$" qty="13"/>
                <Card img={Mobiles} title="I phone xs max" price="1200$" qty="13"/>
                <Card img={Mobiles} title="I phone xs max" price="1200$" qty="13"/>
                <Card img={Mobiles} title="I phone xs max" price="1200$" qty="13"/>
                <Card img={Mobiles} title="I phone xs max" price="1200$" qty="13"/>
            </div>
            <LinkProducts/>
        </div>
  )
}

export default Mobile;