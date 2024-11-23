import React, { useEffect, useState } from 'react'
import Question from './Question'

const FAQ = () => {

    const [FAQ, setFAQ] = useState([])

    const getFAQS = async ()=>{
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq')
        const data = await res.json()
        setFAQ(data)
    }

    useEffect(()=>{
        getFAQS()
    }, [])

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
                    
{/* ACCORDION ACCORDION ACCORDION ACCORDION ACCORDION ACCORDION ACCORDION ACCORDION ACCORDION ACCORDION ACCORDION ACCORDION  */}

                    <ul className="ul-style">
                        {
                            FAQ.map((question) => (
                                <Question key={question.id} question={question}/>

                            ))
                        }
                    </ul>
                </div>
            </section>
  )
}

export default FAQ