import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar as filledStar, faStar as emptyStar} from '@fortawesome/free-solid-svg-icons';


const StarRating = ({starRating}) => {
    const maxStars = 5;


  return (
    <div className='star-rating'>
        {Array.from({length: maxStars}).map((_, index)=>(
            <FontAwesomeIcon 
                key={index}
                icon={index < starRating ? filledStar : emptyStar}  
                color={index < starRating ? '#ffd700' : '#ccc'}
                className='star'/>
                 
        ))

        }
    </div>
    // kolla på youtube eller chat gpt om hur generera stjärnor
  )
}

export default StarRating