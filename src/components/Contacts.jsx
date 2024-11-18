import React from 'react'

const Contacts = () => {
  return (
    <div className="container">
                
                <a id="siliconlight" href="index.html">
                    <img id="light" src="src\BILDER\silicon.svg" alt="logotype"/>
                </a>
                <a id="silicondark" href="index.html">
                    <img id="dark" src="src\BILDER\solid.svg" alt="logotype"/>
                </a>
                
    
                <nav id="navbar">
                    <a href="#"> Features</a>
                </nav>
                
                
                <div id="dark-mode-settings" className="dark-settings">
                    <span id="dark-mode"> Dark Mode</span>
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                </div>
                
                <a id="sign-in-btn" href="#" className="sign-in">
                    <img src="src\BILDER\user.svg" alt=""/>
                    <span>Sign in / up</span>
                </a>
                
                <a id="hamburger" href="#"><img src="src\BILDER\Horizontal Divider.svg" alt="menu"/></a>

    </div>
  )
}

export default Contacts