import React from 'react';
import Card from '../components/Card-2';
import LinkProducts from '../products/LinkProducts';
import Coffee from "../images/Coffee.png"
import {MdOutlineSell} from 'react-icons/md'
const BestSell = () => {
    return (
        <div className='relative top-[13vh] bg-white rounded-lg shadow-lg p-5'>
            <div>
                <span className='flex items-center gap-2'>
                    <MdOutlineSell size="30px"/>
                    <h5 className='font-bold mb-0'>Best Sell</h5>
                </span>
                <hr className='p-0 m-0 border-[3px]'/>
            </div>
            <div className='mt-3 grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>
                <Card img={Coffee} price="1.2$" title="Coffee" qty="27"/>
                <Card img={Coffee} price="1.2$" title="Coffee" qty="27"/>
                <Card img={Coffee} price="1.2$" title="Coffee" qty="27"/>
                <Card img={Coffee} price="1.2$" title="Coffee" qty="27"/>
                <Card img={Coffee} price="1.2$" title="Coffee" qty="27"/>
                <Card img={Coffee} price="1.2$" title="Coffee" qty="27"/>
            </div>
            <LinkProducts/>
        </div>
    );
}

export default BestSell;
