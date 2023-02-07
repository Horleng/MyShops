import React from 'react'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import ContactUs from './components/Contact';
import Product from './components/Products';
import About from './components/About';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Signin from './components/Signin';
import Create from './components/Create';
import Favorite from './components/Favorite';
import Mobile from "./products/Mobile";
import Computer from "./products/Computer";
import Coffee from "./products/Coffee";
import Clothes from "./products/Clothes";
import EnergyDrinks from "./products/EnergyDrinks";
import Books from './products/Books';
import Promotions from './products/Promotions';
import BestSell from './products/BestSell';
import NewItem from './products/NewItem';
export default function App() {
  return (
    <div className='bg-gray-200 min-h-screen'>
      <div className='z-50 w-full fixed'>
        <Navbar />
      </div>
      <div className='container'>
          <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/auth/signin' element={<Signin/>}/>
          <Route path='/auth/signUp' element={<Create/>}/>
          <Route path='/aboutUs' element={<About/>} />
          <Route path='/products' element={<Product/>} />
          <Route path='/contactUs' element={<ContactUs/>} />
          <Route path='/products/favorite' element={<Favorite/>}/>
          <Route path='/products/mobile' element={<Mobile/>} />
          <Route path='/products/computer' element={<Computer/>}/>
          <Route path='/products/clothes' element={<Clothes/>} />
          <Route path='/products/coffee' element={<Coffee/>}/>
          <Route path='/products/energy-drink' element={<EnergyDrinks/>} />
          <Route path='/products/books' element={<Books/>}/>
          <Route path='/products/Promotions' element={<Promotions/>} />
          <Route path='/products/best-sell' element={<BestSell/>} />
          <Route path='/products/new-items' element={<NewItem/>} />
          </Routes>
      </div>
    <div className='w-[100%] mt-[150px]'>
      <Footer/>
    </div>
    </div>
  )
}
