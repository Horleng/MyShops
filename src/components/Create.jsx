import React, { useState } from 'react';
import InformationForm from './informationForm';
import InformationForm1 from './InformationForm1';
import { FaFacebook } from 'react-icons/fa';
import Facebook from 'react-simple-oauth2-login';
import { Link } from 'react-router-dom';
function Create() {
    const [form, setForm] = useState(true);
    const onLogin = (res) => console.log(res.access_token);
    const onFailure = (err) => console.log(err);
    return (
        <div className='h-[75vh] relative top-[15vh] shadow-lg rounded-md bg-white flex flex-col justify-center'>
            {form ? <InformationForm1 /> : <InformationForm />}
            <div className='flex flex-col justify-center gap-2 lg:w-[40%] mx-auto'>
                <button className='mt-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 hover:text-green-600'
                onClick={()=>setForm(false)}>Create Account</button>
                <span className='flex justify-between mt-1'>
                    <hr className='border-[3px]  border-black w-[45%]' />
                    <h6 className='text-gray-600'>or</h6>
                    <hr className='border-[3px] w-[45%]  border-black' />
                </span>
                <span className='flex items-center bg-blue-600 hover:bg-blue-700 rounded-lg'>
                    <FaFacebook className='text-2xl absolute ml-[15%] ' />
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
                <span className='flex items-center text-sm gap-3 mb-10 mt-3'>
                    <p className='m-0 p-0'>have account? </p>
                    <Link to='/auth/signin' className='underline text-blue-700'>Signin</Link>
                </span>
            </div>
        </div>

    )
}

export default Create;