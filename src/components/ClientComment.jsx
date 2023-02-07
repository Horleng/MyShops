import React from 'react'
import ReactStars from "react-rating-stars-component";
import Comment from"./Comment";
function ClientComment() {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return (
        <div className='my-3'>
            <h5 className='flex justify-center text-gray-50 mt-3'>How about our service?</h5>
            <span className='flex justify-center'>
                <ReactStars  classNames="text-xl "
                    count={5}
                    onChange={ratingChanged}
                    size={30}
                    activeColor="#ffd700"
                />  
            </span>
            <div>
            <Comment/>
            </div>
        </div>
    )
}

export default ClientComment