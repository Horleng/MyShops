import React from 'react';
import Coffees from "../images/Coffee.png";
import Card from '../components/Card-2';
import LinkProducts from '../products/LinkProducts';
const Coffee = () => {
    return (
        <div className='relative top-[13vh] bg-white rounded-lg p-5'>
            <span className='flex items-center gap-2'>
                <img src="https://thumbs.dreamstime.com/b/laos-vientiane-cafe-cappuccino-coffee-amazon-cafeshop-city-southeastasia-91354203.jpg" alt="" 
                className='w-[40px] h-[40px] rounded-full'/>
                <h4 className='m-0 mt-2 font-bold'>Coffees</h4>
            </span>
            <hr className='p-0 m-0 border-2'/>
            <div className='mt-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3'>
                <Card img={Coffees} title="Amazone Coffee" price="1200$" qty="13"/>
                <Card img={Coffees} title="Amazone Coffee" price="1200$" qty="13"/>
                <Card img={Coffees} title="Amazone Coffee" price="1200$" qty="13"/>
                <Card img={Coffees} title="Amazone Coffee" price="1200$" qty="13"/>
                <Card img={Coffees} title="Amazone Coffee" price="1200$" qty="13"/>
                <Card img={Coffees} title="Amazone Coffee" price="1200$" qty="13"/>
                <Card img={Coffees} title="Amazone Coffee" price="1200$" qty="13"/>
                <Card img={Coffees} title="Amazone Coffee" price="1200$" qty="13"/>
            </div>
            <LinkProducts/>
        </div>
    );
}

export default Coffee;
