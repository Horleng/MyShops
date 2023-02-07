import React from 'react'
import Cloth from "../images/Clost.png";
import Card from '../components/Card-2';
import LinkProducts from '../products/LinkProducts';
function Clothes() {
  return (
    <div className='relative top-[13vh] bg-white rounded-lg p-5'>
            <span className='flex items-center gap-2'>
                <img src="data:image/jpeg;base64,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" alt="" 
                className='w-[40px] h-[40px] rounded-full'/>
                <h4 className='m-0 mt-2 font-bold'>Clothes Brand</h4>
            </span>
            <hr className='p-0 m-0 border-2'/>
            <div className='mt-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3'>
                <Card img={Cloth} title="Clothes Brand" price="1200$" qty="13"/>
                <Card img={Cloth} title="Clothes Brand" price="1200$" qty="13"/>
                <Card img={Cloth} title="Clothes Brand" price="1200$" qty="13"/>
                <Card img={Cloth} title="Clothes Brand" price="1200$" qty="13"/>
                <Card img={Cloth} title="Clothes Brand" price="1200$" qty="13"/>
                <Card img={Cloth} title="Clothes Brand" price="1200$" qty="13"/>
                <Card img={Cloth} title="Clothes Brand" price="1200$" qty="13"/>
                <Card img={Cloth} title="Clothes Brand" price="1200$" qty="13"/>
            </div>
            <LinkProducts/>
        </div>
  )
}

export default Clothes