import React from 'react'

const HowDoesItWork = () => {
  return (
    <section className="howDoesItWork">
                <div className="h2-how">
                    <h2 className="mt4 mb3 txt-align heading1">How Does It Work?</h2>
                </div>
                <div className="howLayout">
                    <img id="iphone-left" className="nodisp" src="src\BILDER\left-iphone.svg" alt="left iphone"/>
                    <img id="iphone-center" src="src\BILDER\iphone-transfer-tab-mob.svg" alt="iphone"/>
                    <img id="iphone-right" className="nodisp" src="src\BILDER\right-iphone.svg" alt="right iphone"/>
                </div>
                <div className="width p-lr1 mb3">
                    <h3 className="p1 txt-align heading4">Transfers to people from your contact list</h3>
                    <p className="p-how txt-align font-m">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit voluptatem hic totam earum perspiciatis unde eos deserunt dolore.</p>
                </div>
                
    </section>
  )
}

export default HowDoesItWork