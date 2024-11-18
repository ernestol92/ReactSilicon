import React from 'react'

const FAQ = () => {
  return (
    <section>
                <div className="faq mt4">
    
    
                    <div className="h2-p">
                    <h2 className="alignment-h2 heading2">Any questions? Check out the FAQs</h2>
                    <p className="alignment-p font-l">Still have unanswered questions and need
                        to get in touch?</p>
                    </div>
                    <div className="cardcontact cardphone">
                        <div>
                        <img src="src\BILDER\phone.svg" alt="phone logo"/>
                        </div>
                        <p className="font-s">Still have  questions?</p>
                        <a className="btn-contact" href="#">Contact us <img src="src\BILDER\purpleicon-r.svg" alt=""/></a>
    
                    </div>
    
                    <div className="cardcontact cardwhatsapp">
                        <div>
                        <img src="src\BILDER\whatsapp.svg" alt="phone logo"/>
                        </div>
                        <p className="font-s">Don't like phone calls?</p>
                        <a className="btn-contact green" href="#">Contact us <img src="src\BILDER\greenicon-r.svg" alt=""/></a>
    
                    </div>
                    
                    <ul className="ul-style">
                        <li className="li-style">
                            <label htmlFor="first">Is any of my personal information
                                stored in the App? <span className="arrowicon">&#x3e;</span></label>
                            <input type="checkbox" name="accordion" id="first" defaultChecked/>
                            <div className="answer font-s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quae modi molestias dolorem aut quam velit molestiae nobis corporis porro.</div>
    
                        </li>
                        <li className="li-style">
                            <label htmlFor="second">What formats can I download my
                                transaction history in?<span>&#x3e;</span></label>
                            <input type="checkbox" name="accordion" id="second"/>
                            <div className="answer font-s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quae modi molestias dolorem aut quam velit molestiae nobis corporis porro.</div>
    
                        </li>
                        <li className="li-style">
                            <label htmlFor="third">Can I schedule future transfers?<span>&#x3e;</span></label>
                                <input type="checkbox" name="accordion" id="third"/>
                            <div className="answer font-s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quae modi molestias dolorem aut quam velit molestiae nobis corporis porro.</div>
    
                        </li>
                        <li className="li-style">
                            <label htmlFor="fourth">When can I use Banking App
                                services?<span>&#x3e;</span></label>
                            <input type="checkbox" name="accordion" id="fourth"/>
                            <div className="answer font-s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quae modi molestias dolorem aut quam velit molestiae nobis corporis porro.</div>
    
                        </li>
                        <li className="li-style">
                            <label htmlFor="fifth">Can I create my own password that is
                                easy for me to remember?<span>&#x3e;</span></label>
                            <input type="checkbox" name="accordion" id="fifth"/>
                            <div className="answer font-s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quae modi molestias dolorem aut quam velit molestiae nobis corporis porro.</div>
    
                        </li>
                        <li className="li-style">
                            <label htmlFor="sixth">What happens if I forget or lose my
                                password?<span>&#x3e;</span></label>
                            <input type="checkbox" name="accordion" id="sixth"/>
                            <div className="answer font-s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quae modi molestias dolorem aut quam velit molestiae nobis corporis porro.</div>
    
                        </li>
                    </ul>
                </div>
            </section>
  )
}

export default FAQ