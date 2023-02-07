import React from 'react'
import Book from "../images/Book.png";
import Card from '../components/Card-2';
import LinkProducts from '../products/LinkProducts';
function Books() {
  return (
    <div className='relative top-[13vh] bg-white rounded-lg p-5'>
            <span className='flex items-center gap-2'>
                <img src="https://www.shutterstock.com/image-vector/book-icon-sign-design-260nw-553945819.jpg" alt="" 
                className='w-[40px] h-[40px] rounded-full'/>
                <h4 className='m-0 mt-2 font-bold'>Books</h4>
            </span>
            <hr className='p-0 m-0 border-2'/>
            <div className='mt-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3'>
                <Card img={Book} title="Books" price="1200$" qty="13"/>
                <Card img={Book} title="Books" price="1200$" qty="13"/>
                <Card img={Book} title="Books" price="1200$" qty="13"/>
                <Card img={Book} title="Books" price="1200$" qty="13"/>
                <Card img={Book} title="Books" price="1200$" qty="13"/>
                <Card img={Book} title="Books" price="1200$" qty="13"/>
                <Card img={Book} title="Books" price="1200$" qty="13"/>
                <Card img={Book} title="Books" price="1200$" qty="13"/>
            </div>
            <LinkProducts/>
        </div>
  )
}

export default Books;