import React from 'react';
import { Link } from 'react-router-dom';
import Facebook from 'react-simple-oauth2-login';
import {FaFacebook} from 'react-icons/fa'
const Signin = () => {
    const onLogin = (res)=>console.log(res.access_token);
    const onFailure = (err)=>console.log(err)
    return (
        <div className='h-[70vh] relative top-[15vh] bg-white flex flex-col justify-center'>
            <h4 className='mx-auto'>Sigin</h4>
            <div className='flex flex-col justify-center gap-2 lg:w-[40%] mx-auto'>
                <label htmlFor="email">Email</label>
                <input typ="email" name='email' placeholder='Enter your email...'
                className='bg-gray-200 py-2 px-4 rounded-lg outline-orange-500 border-none border-orange-400 placeholder:text-sm'/>
                
                <label htmlFor="password">Password</label>
                <input type="password" name='password' placeholder='.................'
                className='bg-gray-200 py-2 px-4 rounded-lg outline-orange-500 border-none border-orange-400 placeholder:text-sm'/>
                
                <span className='flex justify-between'>
                    <span className='items-center flex gap-2  text-sm'>
                        <input type="checkbox" className='text-blue-700 cursor-pointer'/>
                        remember me
                    </span>
                    <p className='underline text-blue-700 cursor-pointer  text-sm'>forgot password?</p>
                </span>
                <button className='py-2 rounded-lg bg-gray-200 hover:bg-gray-300 hover:text-green-600'>Login</button>
                <span className='flex justify-between mt-1'>
                    <hr className='border-[3px]  border-black w-[45%]' />
                    <h6 className='text-gray-600'>or</h6>
                    <hr className='border-[3px] w-[45%]  border-black' />
                </span>
                <span className='flex items-center bg-blue-600 hover:bg-blue-700 rounded-lg'>
                    <FaFacebook className='text-2xl absolute ml-[15%] '/>
                    <Facebook  
                        buttonText="Facebook"
                        authorizationUrl="https://www.facebook.com/dialog/oauth"
                        responseType="token"
                        clientId="717565173080086"
                        redirectUri="http://localhost:3000"
                        onSuccess={onLogin}
                        onFailure={onFailure}
                        className=" py-2 w-[100%]"
                    />
                </span>
                <span className='flex items-center text-sm gap-3'>
                    <p className='m-0 p-0'>not account? </p>
                    <Link to='/auth/signUp' className='underline text-blue-700'>Create one</Link>
                </span>
            </div>
        </div>
    );
}

export default Signin;
