import React, { useState } from 'react'


const Subscribe = () => {

    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState('')

    const handleChange = (e)=>{
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const emailValue = e.target.value

        setEmail(emailValue)
        
        if(emailValue.trim().length === 0){
            setErrors('Email is required');            
        }
        else if(!emailRegex.test(emailValue.trim())){
            setErrors('Please enter a valid email address');
        }
        else{
            setErrors('');
        }
    }
    
    

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(errors.length === 0)return
        if(errors)return
        
        return console.log('validerat');
        
        
        
    }


    

  return (
    <section>
                <div className="p1">
                    <div className="subscription-flex">
                        <div className="subscribe-group">
                            <div className="subscribe-icon">
                                <img src="src\BILDER\notification-icon-1.svg fill.svg" alt="subscription bell"/>
                            </div>
                            <div className="subscribe-text">
                                <h2 className="heading4">Subscribe to our newsletter<span> to stay informed about latest updates</span></h2>
                            </div>
                        </div> 

                        <div className='subscribe-error'>
                            <form onSubmit={handleSubmit} className="subscribe-input dispflex" noValidate >
                                <input className="user-input dispflex" type="email" value={email} onChange={handleChange} required placeholder="Your email"/>
                                <button className="btn-subscribe dispflex btn-subscribe:hover">Subscribe</button>
                                <img className="letter-icon" src="src\BILDER\letterIcon.svg" alt=""/>
                                
                                
                            </form>
                            <span className='error-msg'>{errors}</span>
                        </div>
                </div>
                </div>
             </section>
  )
}

export default Subscribe