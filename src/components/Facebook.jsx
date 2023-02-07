import React from 'react'
import FacebookLogin from "react-simple-oauth2-login"
import {BsFacebook} from "react-icons/bs"
export default function Facebook(props) {
    const onLogin = async(res)=>{
        console.log(res.access_token);
    }
    const onFailure = response => console.error(response);
  return (
    <>
        <span className='flex ml-[45%] items-center'>
            <BsFacebook className='text-3xl '/>
            <FacebookLogin className="py-3 px-[40px] absolute "
                buttonText="Facebook"
                authorizationUrl="https://www.facebook.com/dialog/oauth"
                responseType="token"
                clientId="717565173080086"
                redirectUri="http://localhost:3000"
                onSuccess={onLogin}
                onFailure={onFailure}
            />
        </span>
    </>
  )
}
