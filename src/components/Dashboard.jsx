import React from 'react';
import ListCateogory from './ListCateogory';
import SlicePost from './SlicePost';
import Recomment from './Recomment';
import ClientViews from './ClientViews';
import Bookstore from './Introduct'
import TypeProductList from './TypeProductList';
import ElecttronicTitle from './ElecttronicTitle';
import ClientComment from './ClientComment';
const Dashboard = () => {

    return (
        <div>
            <div className=' relative top-[15vh] bg-white shadow-lg'>

                <div className='lg:flex lg:justify-between lg:gap-4 max-h-[70vh] py-3'>
                    <div className='flex-[0.3] my-3 ml-5 mr-2 '>
                        <ListCateogory />
                    </div>
                    <div className='flex-1 my-3 bg-gray-300'>
                        <SlicePost />
                    </div>
                    <div className='flex-[0.3]  my-3 mr-5'>
                        <Recomment />
                    </div>
                </div>

            </div>
            <TypeProductList/>
            <div className='mt-5 bg-white shadow-lg rounded-lg'>
                <Bookstore/>
            </div>
            <div className='mt-5 bg-white shadow-lg rounded-lg'>
                <ElecttronicTitle/>
            </div>
            <div className='mt-5 bg-white shadow-lg rounded-lg'>
                <ClientViews/>
                <div className='bg-gray-500 border-t-2 border-red-500 flex justify-center rounded-b-lg'>
                    <ClientComment/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
