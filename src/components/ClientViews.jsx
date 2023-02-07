import React from 'react'
import ReactStars from "react-rating-stars-component";
import {AiOutlineArrowRight} from "react-icons/ai";
function ClientViews() {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return (
        <div className='pt-5'>
            <div className='flex justify-center'>
                <h3>Cilent Comments & Vote</h3>
            </div>
            <div className='flex justify-evenly mt-3'>
                {/* 1 */}
                <div>
                    <div>
                        <img src="https://yt3.googleusercontent.com/ytc/AMLnZu-s5HJBzUt6g4Mp6vkvFSNCMYDLzci6VajIXrqw=s900-c-k-c0x00ffffff-no-rj" alt=""
                            className='w-[150px] rounded-full transition-transform hover:scale-[1.05]' />
                    </div>
                    <span className='flex flex-col justify-center'>
                        <h6 className='mx-auto mt-3'>Mr Marina</h6>
                        <span className=''>
                            <span className='flex justify-center'>
                                <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    size={24}
                                    activeColor="#ffd700"
                                />
                            </span>
                            <p className='text-xs flex flex-wrap justify-center'>
                                See comment... 
                                <span className='cursor-pointer rounded-full hover:bg-gray-200'>
                                    <AiOutlineArrowRight/>
                                </span>
                            </p>
                        </span>
                    </span>
                </div>
                {/* 2 */}
                <div>
                    <div>
                        <img src="https://yt3.googleusercontent.com/ytc/AMLnZu-s5HJBzUt6g4Mp6vkvFSNCMYDLzci6VajIXrqw=s900-c-k-c0x00ffffff-no-rj" alt=""
                            className='w-[150px] rounded-full transition-transform hover:scale-[1.05]' />
                    </div>
                    <span className='flex flex-col justify-center'>
                        <h6 className='mx-auto mt-3'>Mr Marina</h6>
                        <span className='flex justify-center'>
                            <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    size={24}
                                    activeColor="#ffd700"
                                />
                        </span>
                        <p className='text-xs flex flex-wrap justify-center'>
                                See comment... 
                                <span className='cursor-pointer rounded-full hover:bg-gray-200'>
                                    <AiOutlineArrowRight/>
                                </span>
                            </p>
                    </span>
                </div>
                {/* 3 */}
                <div>
                    <div>
                        <img src="https://yt3.googleusercontent.com/ytc/AMLnZu-s5HJBzUt6g4Mp6vkvFSNCMYDLzci6VajIXrqw=s900-c-k-c0x00ffffff-no-rj" alt=""
                            className='w-[150px] rounded-full transition-transform hover:scale-[1.05]' />
                    </div>
                    <span className='flex flex-col justify-center'>
                        <h6 className='mx-auto mt-3'>Mr Marina</h6>
                        <span className='flex justify-center'>
                            <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    size={24}
                                    activeColor="#ffd700"
                                />
                        </span>
                        <p className='text-xs flex flex-wrap justify-center'>
                                See comment... 
                                <span className='cursor-pointer rounded-full hover:bg-gray-200'>
                                    <AiOutlineArrowRight/>
                                </span>
                            </p>
                    </span>
                </div>
                <span className='absolute right-[10%] rounded-full cursor-pointer hover:bg-gray-200 mt-16'>
                        <AiOutlineArrowRight className='text-4xl flex-0'/>
                </span>
            </div>
        </div>
    )
}

export default ClientViews