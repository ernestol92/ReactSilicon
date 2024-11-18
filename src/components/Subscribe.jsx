import React, { useState } from 'react'


const Subscribe = () => {

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
                        <form className="subscribe-input dispflex" >
                            <input className="user-input dispflex" type="email" placeholder="Your email"/>
                            <button className="btn-subscribe dispflex">Subscribe</button>
                            <img className="letter-icon" src="src\BILDER\letterIcon.svg" alt=""/>
                            
                        </form>
                    </div>
                </div>
             </section>
  )
}

export default Subscribe