import React from 'react'
function InformationForm1() {
    return (
        <>
            <h4 className='mx-auto'>Create Account</h4>
            <div className='flex flex-col justify-center gap-2 lg:w-[40%] mx-auto'>
                <label htmlFor="email">Email</label>
                <input typ="email" name='email' placeholder='Enter your email...'
                    className='bg-gray-200 py-2 px-4 rounded-lg outline-orange-500 border-none border-orange-400 placeholder:text-sm' />
                <label htmlFor="email">Password</label>
                <input typ="email" name='password' placeholder='.................'
                    className='bg-gray-200 py-2 px-4 rounded-lg outline-orange-500 border-none border-orange-400 placeholder:text-sm' />
                <label htmlFor="c-pass">Confirm Password</label>
                <input type="password" name='c-pass' placeholder='.................'
                    className='bg-gray-200 py-2 px-4 rounded-lg outline-orange-500 border-none border-orange-400 placeholder:text-sm' />

            </div>
        </>

    )
}

export default InformationForm1;