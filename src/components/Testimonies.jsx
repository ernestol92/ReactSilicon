import React from 'react'

const Testimonies = () => {
  return (
    <section className="testimonies">
                <div className="dispflex testimonies-container">
                    <h2 className="testimonies-h2 mt4 heading1">Clients Are Loving Our App</h2>
                    <div className="dispflex gap2 mt4 mb4 parentrelative" >
                        <div className="card gap2" id="fanny">
                            <div>
                                <img src="src\BILDER\fannyrating.svg" alt="4 out 5 stars"/>
                            </div>
                            <div>
                                <p className="font-l">Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit.</p>
                            </div>
                            <div className="dispflex gap1">
                                <img src="src\BILDER\fannyauthor.svg" alt="fanny, designer"/>
                                <div>
                                    <h6 className="heading6 m0" >Fanny Summer</h6>
                                    <p className="font-s">Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="card gap2" id="albert">
                            <div>
                                <img src="src\BILDER\albertrating.svg" alt="5 out of 5 stars"/>
                            </div>
                            <div>
                                <p className="font-l">Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget.</p>
                            </div>
                            <div className="dispflex gap1">
                                <img src="src\BILDER\albertauthor.svg" alt="albert, developer"/>
                                <div>
                                    <h6 className="heading6 m0">Albert Flores</h6>
                                    <p className="font-s">Developer</p>
                                </div>
                            </div>
                        </div>
                        <img className="quote1" src="src\BILDER\quotes.svg" alt="quotes"/>
                        <img className="quote2" src="src\BILDER\quotes.svg" alt="quotes"/>
                    </div>
                    <div></div>
    
                </div>
             </section>
  )
}

export default Testimonies