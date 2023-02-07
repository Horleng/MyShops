import React from 'react';
import Energy from "../images/Energy.png";
import Card from '../components/Card-2';
import LinkProducts from '../products/LinkProducts';
const EnergyDrinks = () => {
    return (
        <div className='relative top-[13vh] bg-white rounded-lg p-5'>
            <span className='flex items-center gap-2'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2bFu5eYG5PYp71J8m_hOH7sY7YHinvrU-A&usqp=CAU" alt="" 
                className='w-[40px] h-[40px] rounded-full'/>
                <h4 className='m-0 mt-2 font-bold'>Energy Drinks</h4>
            </span>
            <hr className='p-0 m-0 border-2'/>
            <div className='mt-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3'>
                <Card img={Energy} title="Sting Energy Drink" price="1200$" qty="13"/>
                <Card img={Energy} title="Sting Energy Drink" price="1200$" qty="13"/>
                <Card img={Energy} title="Sting Energy Drink" price="1200$" qty="13"/>
                <Card img={Energy} title="Sting Energy Drink" price="1200$" qty="13"/>
                <Card img={Energy} title="Sting Energy Drink" price="1200$" qty="13"/>
                <Card img={Energy} title="Sting Energy Drink" price="1200$" qty="13"/>
                <Card img={Energy} title="Sting Energy Drink" price="1200$" qty="13"/>
                <Card img={Energy} title="Sting Energy Drink" price="1200$" qty="13"/>
            </div>
            <LinkProducts/>
        </div>
    );
};


export default EnergyDrinks;
