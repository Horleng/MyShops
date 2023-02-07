import React from 'react';
import Card from '../components/Card-2';
import Pc from '../images/Pc.png';
import LinkProducts from '../products/LinkProducts';
const Computer = () => {
    return (
        <div className='relative top-[13vh] bg-white rounded-lg p-5'>
            <span className='flex items-center gap-2'>
                <img src="https://www.digitaltrends.com/wp-content/uploads/2021/11/macbook-pro-2021-02.jpg?fit=720%2C720&p=1" alt="" 
                className='w-[40px] h-[40px] rounded-full'/>
                <h4 className='m-0 mt-2 font-bold'>Computer</h4>
            </span>
            <hr className='p-0 m-0 border-2'/>
            <div className='mt-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3'>
                <Card img={Pc} title="Max book pro" price="1200$" qty="13"/>
                <Card img={Pc} title="Max book pro" price="1200$" qty="13"/>
                <Card img={Pc} title="Max book pro" price="1200$" qty="13"/>
                <Card img={Pc} title="Max book pro" price="1200$" qty="13"/>
                <Card img={Pc} title="Max book pro" price="1200$" qty="13"/>
                <Card img={Pc} title="Max book pro" price="1200$" qty="13"/>
                <Card img={Pc} title="Max book pro" price="1200$" qty="13"/>
                <Card img={Pc} title="Max book pro" price="1200$" qty="13"/>
            </div>
            <LinkProducts/>
        </div>
    );
};


export default Computer;
