import React from 'react'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <header className="hero">
            <Navbar/>
    
            <div className="section-manage">
                <h1 className="display4" id="manage">
                    Manage All Your Money in One App
                </h1>
        
                <p className="font-l" id="description">
                    We offer you a new generation of the mobile banking.  Save, spend & manage money in your pocket.
                </p>
                <a id="appstore-light" href="#">
                    <img src="src\BILDER\appstore-light.svg.svg" alt="appstore-light" />

                </a>
        
                <a id="googleplay" href="#">
                    <img src="src\BILDER\googleplay-light.svg.svg" alt="googleplay-light"/>
            
                </a>
                <a id="appstore-dark" href="#">
                    <img src="src\BILDER\appstore-dark.svg" alt="appstore-light"/>

                </a>
        
                <a id="googleplay-dark" href="#">
                    <img src="src\BILDER\googleplay-dark.svg" alt="googleplay-light"/>
            
                </a>


        
                <div className="discover">
                    <a id="Discover-more-btn" href="#">
                        <img src="src\BILDER\Buttondownarrow.svg" alt="Discover more button"/>
                    </a>
        
                    <span className="font-s">Discover more</span>
                </div>
        
                <div className="iphone12container">
                    <img src="src\BILDER\imageiphone12pro.svg" alt="iphone12"/>
                </div>
            </div>
            
            
        </header>
  )
}

export default Hero