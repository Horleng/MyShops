import React from 'react'
import Card from './Card-2'
import Books from "../images/Book.png";
const Search = () => {
    return (
        <React.Fragment>
            <div className='flex justify-evenly pt-3  bg-slate-500 rounded-lg items-center shadow-lg py-3'>
                <div className='flex flex-1 ml-10'>
                    <input type="search" placeholder='Search...'
                        className='lg:w-[60%] px-3 py-2 bg-slate-200 outline-none placeholder:text-sm rounded-l-lg border-2 border-r-0 border-orange-400 ' />
                    <button className='py-2 px-4 bg-green-500 rounded-r-lg text-white hover:bg-green-600'>Search</button>
                </div>
                <div className='flex-[0.5] flex gap-3 mr-10'>
                    <select className='py-2 px-3 bg-slate-200 rounded-full outline-none  text-sm border-2 border-orange-400'>
                        <option value="">Type of products</option>
                        <option value="compuer">Commputer</option>
                        <option value="mobile">Mobile</option>
                        <option value="books">Books</option>
                        <option value="coffee">Coffee</option>
                        <option value="energy-drinks">Energy Drinks</option>
                        <option value="clothes">Clothes</option>
                    </select>
                    <select className='py-2 px-3 bg-slate-200 rounded-full outline-none text-sm border-2 border-orange-400'>
                        <option value="">Choose Company</option>
                        <option value="apple">Apple</option>
                        <option value="asus">Asus</option>
                        <option value="dell">Dell</option>
                        <option value="lenovo">Lenovo</option>
                        <option value="sumsung">Sumsung</option>
                        <option value="oppo">Oppo</option>
                        <option value="hauwei">Hauwei</option>
                        <option value="hauwei">Vivo</option>
                    </select>
                    <select className='py-2 px-3 bg-slate-200 rounded-full outline-none text-sm border-2 border-orange-400'>
                        <option value="">Choose Country</option>
                        <option value="cam">Cambodia</option>
                        <option value="china">China</option>
                        <option value="south-korea">South Korea</option>
                        <option value="usa">United State(USA)</option>
                    </select>
                </div>
            </div>
            <div className=' pb-2 mx-5'>
                <h5 className='mt-4 font-bold'>Result...</h5>
                {/* <hr className='p-0 m-0 border-2'/> */}
                <div className='max-h-[60vh] my-3 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  overflow-auto gap-3'>
                    <Card title="Books" qty="20" price="2$" img={Books}/>
                    <Card title="Books" qty="20" price="2$" img={Books}/>
                    <Card title="Books" qty="20" price="2$" img={Books}/>
                    <Card title="Books" qty="20" price="2$" img={Books}/>
                    <Card title="Books" qty="20" price="2$" img={Books}/>
                    <Card title="Books" qty="20" price="2$" img={Books}/>
                    <Card title="Books" qty="20" price="2$" img={Books}/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Search