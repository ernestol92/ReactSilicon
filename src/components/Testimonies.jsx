import React, { useEffect, useState } from 'react'
import Testimonial from './Testimonial'

const Testimonies = () => {

    const [testimonials, setTestimonials] = useState([])

    const getTestimonials = async ()=> {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
        const data = await res.json()
        setTestimonials(data)
    }

    useEffect(()=>{
        getTestimonials()
    }, [])

  return (
    <section className="testimonies">
                <div className="dispflex testimonies-container">
                    <h2 className="testimonies-h2 mt4 heading1">Clients Are Loving Our App</h2>
                    <div className="dispflex gap2 mt4 mb4 parentrelative" >
                        {
                        testimonials.map((testimonial) => (
                        <Testimonial key={testimonial.id} item={testimonial}/>
                        ))
                    }
                    </div>
    
                </div>
             </section>
  )
}

export default Testimonies
