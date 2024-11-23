import React, {useState} from 'react'

const Question = ({question}) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleAccordion = ()=>{
        setIsOpen(!isOpen)
    }

  return (
    <li className='li-style' >
        <div onClick={toggleAccordion} className='question-header'>
            <label> 
                {question.title}
                <span className={`arrowicon ${isOpen ? 'open' : ''}`}>&#x3e;</span></label>
            {isOpen && (
                <div className="answer font-s">{question.content}</div>

            )}
        </div>
    </li>
  )
}

export default Question

