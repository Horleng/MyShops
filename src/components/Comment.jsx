import React from 'react'
import {AiOutlineComment} from 'react-icons/ai'
function Comment() {
  return (
    <div className='mx-5 pb-5'>
      <span className='flex items-center gap-2'>
        <img src="https://yt3.googleusercontent.com/ytc/AMLnZu-s5HJBzUt6g4Mp6vkvFSNCMYDLzci6VajIXrqw=s900-c-k-c0x00ffffff-no-rj" alt=""
          className='w-[40px] rounded-full' />
        <h6 className='m-0 p-0 pt-3'>What did you want to say?</h6>
        <hr className='p-0 m-0 border-2' />
        <hr />
      </span>
      <div className='flex'>
        <div className='flex-1 mt-3 flex flex-col'>
          <span className='m-2'>
            <textarea name="text" id="" cols="50" rows="3" className='p-3 outline-none rounded-lg border-2 border-orange-500' />
          </span>
          <button className='bg-green-500 hover:bg-green-600 py-2 px-3 rounded-lg text-white w-[10%]' >Send</button>
        </div>
      </div>
      <div className='flex-1'>
          <span className='flex items-center gap-2 mt-4'>
            <AiOutlineComment size='30px'/>
            <h4 className='m-0 mt-2'>User Comment</h4>
          </span>
          <hr className='p-0 m-0 mb-3 border-2' />
          <div className='py-3  grid grid-cols-2 gap-3'>
            <div className='flex bg-gray-200 transition-transform hover:bg-gray-300 p-3 rounded-xl gap-3'>
              <div className='flex-[0.2]'>
                <img src="https://yt3.googleusercontent.com/ytc/AMLnZu-s5HJBzUt6g4Mp6vkvFSNCMYDLzci6VajIXrqw=s900-c-k-c0x00ffffff-no-rj" alt="" 
                className='w-[70px] rounded-full'/>
                <p className='text-xs relative top-6'>Mon,Jan-01-2023</p>
              </div>
              <span className='flex-[0.8]'>
                <h5 className='font-bold'>Mr Marina</h5>
                <p className='indent-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugit aperiam fugiat iusto, nihil quos.</p>
              </span>
            </div>
            <div className='flex bg-gray-200 transition-transform hover:bg-gray-300 p-3 rounded-xl gap-3'>
              <div className='flex-[0.2]'>
                <img src="https://yt3.googleusercontent.com/ytc/AMLnZu-s5HJBzUt6g4Mp6vkvFSNCMYDLzci6VajIXrqw=s900-c-k-c0x00ffffff-no-rj" alt="" 
                className='w-[70px] rounded-full'/>
                <p className='text-xs relative top-6'>Mon,Jan-01-2023</p>
              </div>
              <span className='flex-[0.8]'>
                <h5 className='font-bold'>Mr Marina</h5>
                <p className='indent-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugit aperiam fugiat iusto, nihil quos.</p>
              </span>
            </div>
            <div className='flex bg-gray-200 transition-transform hover:bg-gray-300 p-3 rounded-xl gap-3'>
              <div className='flex-[0.2]'>
                <img src="https://yt3.googleusercontent.com/ytc/AMLnZu-s5HJBzUt6g4Mp6vkvFSNCMYDLzci6VajIXrqw=s900-c-k-c0x00ffffff-no-rj" alt="" 
                className='w-[70px] rounded-full'/>
                <p className='text-xs relative top-6'>Mon,Jan-01-2023</p>
              </div>
              <span className='flex-[0.8]'>
                <h5 className='font-bold'>Mr Marina</h5>
                <p className='indent-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugit aperiam fugiat iusto, nihil quos.</p>
              </span>
            </div>
            <div className='flex bg-gray-200 transition-transform hover:bg-gray-300 p-3 rounded-xl gap-3'>
              <div className='flex-[0.2]'>
                <img src="https://yt3.googleusercontent.com/ytc/AMLnZu-s5HJBzUt6g4Mp6vkvFSNCMYDLzci6VajIXrqw=s900-c-k-c0x00ffffff-no-rj" alt="" 
                className='w-[70px] rounded-full'/>
                <p className='text-xs relative top-6'>Mon,Jan-01-2023</p>
              </div>
              <span className='flex-[0.8]'>
                <h5 className='font-bold'>Mr Marina</h5>
                <p className='indent-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugit aperiam fugiat iusto, nihil quos.</p>
              </span>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Comment