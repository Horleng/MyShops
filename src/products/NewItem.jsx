import React from 'react';
import Card from '../components/Card-2';
import Coffee from "../images/Coffee.png";
import LinkProducts from '../products/LinkProducts';
import {SiProducthunt} from 'react-icons/si'
const NewItem = () => {
    return (
        <div className='relative top-[13vh] bg-white rounded-lg shadow-lg p-5'>
            <div>
                <span className='flex items-center gap-2'>
                    <SiProducthunt size="30px"/>
                    <h5 className='font-bold mb-0'>New Item</h5>
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

export default NewItem;
