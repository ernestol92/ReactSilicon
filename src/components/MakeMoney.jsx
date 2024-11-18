import React from 'react'

const MakeMoney = () => {
  return (
    <section className="containerpage4" >
                <div className="dispflex gap8 mt4">
                    <div className=" p-lr1 makemoneyleft">
                        <h2 className="heading2">Make your money transfer simple and clear</h2>
                        <ul className="ulstyling">
                            <li className="font-m"> <img src="src\BILDER\bx-check-circle.svg" alt=""/> Banking transactions are free for you</li>
                            <li className="font-m"> <img src="src\BILDER\bx-check-circle.svg" alt=""/> No monthly cash commission</li>
                            <li className="font-m"> <img src="src\BILDER\bx-check-circle.svg" alt=""/> Manage payments and transactions online</li>
                        </ul>
                        <button className="btn-learnmore">Learn More <img src="src\BILDER\icon-r.svg" alt="arrow right"/></button>
                    </div>
    
                    <div className="main-images">
                        <img src="src\BILDER\1345.svg" alt="exempelbild"/>
                    </div>
    
                </div>
                
                <div className="dispflex mt4 mb4">
                    <div className="main-images">
                        <img src="src\BILDER\wade.svg" alt=""/>
                    </div>
                    <div className="rightflex">
                        <h2 className="heading2">Receive payment from international bank details</h2>
                        <div className="dispflex gap2">
                            <div>
                                <div className="features mb1">
                                <img src="src\BILDER\credit-card.png" alt=""/>
                                </div>
                                <p className="font-m">Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                            </div>
                            <div>
                                <div className="features mb1">
                                <img src="src\BILDER\wallet.svg" alt=""/>
                                </div>
                                <p className="font-m">A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                            </div>
                        </div>
                        <button className="btn-learnmore mt2">Learn More <img src="src\BILDER\icon-r.svg" alt=""/></button>
                    </div>
                </div>
            </section>
  )
}

export default MakeMoney