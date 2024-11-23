import React from 'react'
import StarRating from './StarRating'

const Testimonial = ({item}) => {
  return (
    <>
        <div className="card gap2" id="fanny">
            <div>
                <StarRating starRating={item.starRating}/>
                
            </div>
            <div>
                <p className="font-l"> {item.comment}</p>
            </div>
            <div className="dispflex gap1">
                <img src={item.avatarUrl} alt={item.author}/>
                <div>
                    <h6 className="heading6 m0" >{item.author}</h6>
                    <p className="font-s">{item.jobRole}</p>
                </div>
            </div>
        </div>
        <img className="quote1" src="src\BILDER\quotes.svg" alt="quotes"/>
    {/* kod från hans  video om tips och trix */}
    </>
  )
}

export default Testimonial