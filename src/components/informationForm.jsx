import React from 'react'
function informationForm() {
    return (
        <div className='flex flex-col gap-2 mx-auto'>
            <span className='flex gap-3'>
                <span className='flex flex-col'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' placeholder='Enter your name' 
                    className='py-2 px-4 bg-gray-200 rounded-lg outline-violet-500 placeholder:text-sm'/>
                </span>
                <span  className='flex flex-col'>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name='phone' placeholder='Enter your phone number' 
                    className='py-2 px-4 bg-gray-200 rounded-lg outline-violet-500 placeholder:text-sm'/>
                </span>
            </span>
            <span className='flex gap-3'>
                <span className='flex flex-col flex-1'>
                    <label htmlFor="add">Address</label>
                    <input type="text" name='add' placeholder='Enter your address' 
                    className='py-2 px-4 bg-gray-200 rounded-lg outline-violet-500 placeholder:text-sm' />
                </span>
                <span  className='flex flex-col flex-1'>
                    <label htmlFor="birth">birthday</label>
                    <input type="date" name='birth'  
                    className='w-[100%] py-2 px-4 bg-gray-200 rounded-lg outline-violet-500 placeholder:text-sm'/>
                </span>
            </span>
            <span className='flex gap-3'>
                <span className='flex-1 flex flex-col justify-between'>
                    <label htmlFor="sex">Sex</label>
                    <select name="sex" id="" className='py-2 px-3 w-[100%] bg-gray-200 rounded-lg'>
                        <option value="">undefine</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                </span>
                <span  className='flex flex-col flex-1'>
                    <label htmlFor="img">Photo</label>
                    <input type="file" name='img' className='px-3 py-[5px] bg-gray-200 rounded-lg w-[100%]'/>
                </span>
            </span>

        </div>
    )
}

export default informationForm